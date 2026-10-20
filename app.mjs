import {contexts} from './contexts.mjs';
import {consultation,domains,domainForResource} from './consultations.mjs';
import {applyLanguage,applySelectLanguage,readLanguage,saveLanguage,languageCode,text,annotate} from './i18n.mjs';
import {configureNavigation} from './navigation.mjs';
import {behaviourReport} from './behaviour.mjs';
import {resources,activities} from './resources.mjs';
import {filterResources,suggest,emptyState,writeState,STORAGE_KEY,localDay} from './core.mjs';
import {openSession,removeSaved,parseBackup} from './session.mjs';
import {makePlan,plannerTopics} from './planner.mjs';
const $=id=>document.getElementById(id);
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
let storage=null;try{storage=window.localStorage;}catch{/* Session mode remains available. */}
const initial=openSession(storage);
let {remember,state}=initial;
let historyLimit=7;
let preferenceStorage=null;try{preferenceStorage=window.sessionStorage;}catch{}
let uiLanguage=readLanguage(preferenceStorage);
const navigation=configureNavigation(document,window,()=>uiLanguage);
function focusResult(id,language=uiLanguage){
 const node=$(id);node.setAttribute('aria-label',text('result-label',language));annotate(node,language);navigation.reveal(id);
 $('result-status').textContent='';queueMicrotask(()=>{$('result-status').textContent=text('result-ready',language);annotate($('result-status'),language);});
}
function setInterfaceLanguage(value){
 uiLanguage=languageCode(value);saveLanguage(preferenceStorage,uiLanguage);$('ui-language').value=uiLanguage;applyLanguage(document,uiLanguage);applySelectLanguage(document,uiLanguage);
 $('plan-language').value=uiLanguage;renderPlanOptions();navigation.refreshTour();
}
$('ui-language').onchange=()=>setInterfaceLanguage($('ui-language').value);

$('remember').checked=remember;
function persist(){
 if(!remember){$('storage-status').textContent='Session only. Nothing is saved for the next visit.';return;}
 $('storage-status').textContent=writeState(storage,state)?'Saved in this browser only.':'Browser storage is unavailable or full. Changes are in this session only; export to keep them.';
}
function external(url,label){const a=el('a',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function updateBookmarks(){
 for(const b of document.querySelectorAll('[data-bookmark]')){
  const selected=state.saved.includes(b.dataset.bookmark);
  b.textContent=selected?'Bookmarked ✓':'Bookmark';b.setAttribute('aria-pressed',String(selected));
 }
}
function renderConsultation(result){
 const article=el('article',undefined,'panel');article.lang='en-GB';article.dir='ltr';
 article.append(el('h3',result.title),el('p',result.intro));
 for(const section of result.sections){article.append(el('h4',section.heading));for(const paragraph of section.paragraphs)article.append(el('p',paragraph));}
 if(result.actions.length){article.append(el('h4','Four practical next steps'));const list=el('ol');list.append(...result.actions.map(action=>el('li',action)));article.append(list);}
 if(result.question)article.append(el('h4','A question to reflect on'),el('p',result.question));
 article.append(el('p',result.scope,'muted'));return article;
}
function openConsultation(domain,topic=''){
 $('consult-domain').value=domain;
 $('consult-context').value='';
 const result=consultation({domain,topic,mode:'advice'});
 $('consult-result').replaceChildren(renderConsultation(result));
 focusResult('consult-result');
}
for(const context of contexts)$('consult-context').append(new Option(context.title,context.id));
for(const domain of domains)$('consult-domain').append(new Option(domain.title,domain.id));
$('consult-form').onsubmit=event=>{
 event.preventDefault();
 const result=consultation({domain:$('consult-domain').value,mode:$('consult-mode').value,context:$('consult-context').value,ongoing:$('consult-ongoing').checked,coercion:$('consult-coercion').checked,minor:$('consult-minor').checked,unsafe:$('consult-unsafe').checked,medical:$('consult-medical').checked,faith:$('consult-faith').checked});
 $('consult-result').replaceChildren(renderConsultation(result));focusResult(result.urgent?'support':'consult-result');
};
$('consult-form').onreset=()=>$('consult-result').replaceChildren();
function internalReading(r){
 const button=el('button','Read guidance in Sukoon','secondary');
 button.onclick=()=>openConsultation(domainForResource(r),r.tags.find(t=>['sleep','worry','low mood','motivation','self-kindness','connection'].includes(t))||'');
 return button;
}
function optionalPublisher(r){
 const detail=el('details');detail.append(el('summary','Original publisher — optional'),external(r.url,'Open publisher page ↗'));return detail;
}
function card(r){
 const a=el('article',undefined,'panel card');
 a.append(el('small',r.publisher+' · '+r.format),el('h3',r.title),el('p',r.description),el('small',r.languages.join(' / ')+' · Free access · Page reviewed '+r.reviewed),internalReading(r),optionalPublisher(r));
 const b=el('button',state.saved.includes(r.id)?'Bookmarked ✓':'Bookmark','secondary');
 b.dataset.bookmark=r.id;b.setAttribute('aria-pressed',String(state.saved.includes(r.id)));b.setAttribute('aria-label','Bookmark '+r.title);
 b.onclick=()=>{state.saved=state.saved.includes(r.id)?state.saved.filter(x=>x!==r.id):[...state.saved,r.id];persist();updateBookmarks();if($('saved-only').checked){renderResources();$('result-count').tabIndex=-1;$('result-count').focus();}};
 a.append(b);return a;
}
function renderResources(){
 const list=filterResources({query:$('search').value,topic:$('topic').value,language:$('language').value,savedOnly:$('saved-only').checked,saved:state.saved});
 $('resources').replaceChildren(...list.map(card));
 $('result-count').textContent=list.length?list.length+' resources. Guidance is available inside Sukoon; original publisher pages are optional.':'No matching resources. Try clearing a filter.';
}
for(const tag of [...new Set(resources.flatMap(r=>r.tags))].sort())$('topic').append(new Option(tag,tag));
for(const id of ['search','topic','language','saved-only'])$(id).addEventListener('input',renderResources);
$('check-form').onsubmit=e=>{
 e.preventDefault();
 const result=suggest({concern:$('concern').value,ongoing:$('ongoing').checked,interfering:$('interfering').checked,unsafe:$('unsafe').checked});
 const message=uiLanguage==='en'?result.message:text(result.urgent?'safety-message':$('ongoing').checked||$('interfering').checked?'check-followup':'check-normal',uiLanguage);const intro=el('p',message);annotate(intro,uiLanguage);const nodes=[intro];
 if(result.urgent){const a=el('a','Go to human support');a.href='#support';nodes.push(a);}
 else {nodes.push(renderConsultation(consultation({domain:$('concern').value==='connection'?'social':'emotions',topic:$('concern').value,ongoing:$('ongoing').checked||$('interfering').checked})));const grid=el('div',undefined,'grid');grid.append(...result.ids.map(id=>card(resources.find(r=>r.id===id))));nodes.push(grid);}
 $('suggestions').replaceChildren(...nodes);focusResult(result.urgent?'support':'suggestions');
};
function sourceList(ids){const list=el('ul');list.lang='en-GB';list.dir='ltr';for(const id of ids){const r=resources.find(r=>r.id===id);if(!r)continue;const li=el('li');li.append(el('span',r.title+' — '+r.publisher+' '),internalReading(r),optionalPublisher(r));list.append(li);}return list;}
$('behaviour-form').onsubmit=e=>{
 e.preventDefault();
 const result=behaviourReport({topic:$('behaviour-topic').value,role:$('behaviour-role').value,setting:$('behaviour-setting').value,certainty:$('behaviour-certainty').value,power:$('behaviour-power').checked,repeated:$('behaviour-repeated').checked,impact:$('behaviour-impact').checked,minor:$('behaviour-minor').checked,eating:$('behaviour-eating').checked,unsafe:$('behaviour-unsafe').checked});
 const report=el('article',undefined,'panel');report.lang='en-GB';report.dir='ltr';if(uiLanguage!=='en'){const intro=el('p',text(result.urgent?'safety-message':'report-summary',uiLanguage));annotate(intro,uiLanguage);report.append(intro);}report.append(el('h3',result.title),el('p',result.summary));
 if(result.actions.length){report.append(el('h4','Your next steps'));const list=el('ol');list.append(...result.actions.map(action=>el('li',action)));report.append(list);}
 for(const section of result.sections){
  const detail=el('details',undefined,'report-detail');if(result.urgent)detail.open=true;
  detail.append(el('summary',section.heading),el('p',section.text));report.append(detail);
 }
 if(result.sources.length){report.append(el('h4','Further reading'),sourceList(result.sources));}
 $('behaviour-report').replaceChildren(report);focusResult(result.urgent?'support':'behaviour-report');
};
$('behaviour-form').onreset=()=>$('behaviour-report').replaceChildren();
const planLabels={en:['What would help?','Include optional faith-based comfort','I feel unsafe or need urgent help','Make a small plan','Clear plan'],roman:['Kis cheez mein madad chahiye?','Ikhtiyari roohani tasalli shamil karain','Main ghair mehfooz hoon ya foran madad chahiye','Chhota plan banain','Plan saaf karain'],ur:['کس چیز میں مدد چاہیے؟','اختیاری روحانی تسلی شامل کریں','میں غیر محفوظ ہوں یا فوری مدد چاہیے','چھوٹا منصوبہ بنائیں','منصوبہ صاف کریں']};
function renderPlanOptions(){
 const lang=$('plan-language').value,selected=$('plan-topic').value;
 $('plan-topic').replaceChildren(...plannerTopics.map(t=>new Option(t.labels[lang],t.id)));
 if(plannerTopics.some(t=>t.id===selected))$('plan-topic').value=selected;
 for(const [index,id] of ['plan-topic-label','plan-faith-label','plan-unsafe-label','plan-submit','plan-reset'].entries())$(id).textContent=planLabels[lang][index];
 $('plan-form').lang=lang==='roman'?'ur-Latn':lang==='ur'?'ur':'en-GB';$('plan-form').dir=lang==='ur'?'rtl':'ltr';
 $('plan-result').replaceChildren();
}
$('plan-language').onchange=renderPlanOptions;
$('plan-form').onsubmit=e=>{
 e.preventDefault();const result=makePlan({topic:$('plan-topic').value,language:$('plan-language').value,faith:$('plan-faith').checked,unsafe:$('plan-unsafe').checked});
 const target=$('plan-result');target.lang=result.lang==='roman'?'ur-Latn':result.lang==='ur'?'ur':'en-GB';target.dir=result.dir;
 const panel=el('article',undefined,'panel');panel.append(el('h3',result.title),el('p',result.intro));
 if(result.actions.length){panel.append(el('h4',result.heading));const list=el('ol');list.append(...result.actions.map(a=>el('li',a)));panel.append(list,el('p',result.followup),el('p',result.question));}
 panel.append(el('p',result.limit,'muted'));if(!result.urgent)panel.append(renderConsultation(consultation({domain:$('plan-topic').value==='connection'?'social':'emotions',topic:({'mood':'low mood','kindness':'self-kindness','stress':'worry'})[$('plan-topic').value]||$('plan-topic').value,faith:$('plan-faith').checked})));if(result.sources.length)panel.append(sourceList(result.sources));target.replaceChildren(panel);focusResult('plan-result',result.lang);
};
$('plan-form').onreset=()=>{ $('plan-result').replaceChildren();setTimeout(()=>{$('plan-language').value=uiLanguage;renderPlanOptions();},0); };
let breathTimer=null,deadline=0;
function stopBreath(message='Paused. You can return whenever you like.'){
 clearInterval(breathTimer);breathTimer=null;$('breath').classList.remove('running');$('breath-start').disabled=false;$('breath-stop').disabled=true;$('breath-status').textContent=message;$('breath-count').textContent='';
}
$('breath-start').onclick=()=>{
 stopBreath();deadline=Date.now()+60000;$('breath').classList.add('running');$('breath-start').disabled=true;$('breath-stop').disabled=false;$('breath-status').textContent='Breathe at your own comfortable pace. Stop whenever you wish.';$('breath-count').textContent='60 seconds remaining';
 breathTimer=setInterval(()=>{const left=Math.max(0,Math.ceil((deadline-Date.now())/1000));if(!left)stopBreath('Your minute is complete. Notice how you feel; no particular result is required.');else $('breath-count').textContent=left+' seconds remaining';},1000);
};
$('breath-stop').onclick=()=>stopBreath();
const ground=['Notice five things you can see.','Notice four things you can feel safely, such as the chair supporting you.','Notice three sounds around you.','Notice two scents, or two colours if scents are not comfortable.','Notice one taste already present, or one detail you appreciate.','Take a moment to notice the room. You can finish here.'];let groundIndex=0;
function renderGround(){$('ground-step').textContent=ground[groundIndex];$('ground-next').disabled=groundIndex===ground.length-1;}
$('ground-next').onclick=()=>{groundIndex=Math.min(ground.length-1,groundIndex+1);renderGround();};$('ground-reset').onclick=()=>{groundIndex=0;renderGround();};
function renderActivities(){
 const today=localDay();$('activities').replaceChildren(...activities.map(a=>{
  const n=el('article',undefined,'panel card'),key=today+':'+a.id,complete=state.done.includes(key);
  const b=el('button',complete?'Done for today ✓':'Mark done','secondary');b.setAttribute('aria-pressed',String(complete));
  b.onclick=()=>{state.done=complete?state.done.filter(x=>x!==key):[...state.done,key].slice(-540);persist();renderActivities();};
  n.append(el('h3',a.label),el('p',a.text),internalReading(resources.find(r=>r.id===a.source)),b);return n;
 }));
}
function renderHistory(){
 const entries=state.entries;$('history-summary').textContent=entries.length?entries.length+' reflections (up to 90 retained). These are your own ratings, not clinical scores.':'No reflections yet. Skipping is fine.';
 $('history').replaceChildren(...entries.slice(-historyLimit).reverse().map((entry,offset)=>{
  const index=entries.length-1-offset,n=el('li');n.append(el('div',new Date(entry.at).toLocaleString()+' · Mood '+entry.mood+'/10','entry-meta'));
  if($('show-notes').checked&&entry.note)n.append(el('p',entry.note,'entry-note'));
  const b=el('button','Delete this reflection','secondary');b.onclick=()=>{if(!confirm('Delete this reflection? This cannot be undone in this app.'))return;state.entries.splice(index,1);persist();renderHistory();};n.append(b);return n;
 }));
 $('history-more').hidden=historyLimit>=entries.length;
}
$('show-notes').onchange=renderHistory;$('history-more').onclick=()=>{historyLimit+=7;renderHistory();};
$('journal').onsubmit=e=>{
 e.preventDefault();const mood=Number($('mood').value);if(!Number.isInteger(mood)||mood<1||mood>10){$('mood').setCustomValidity('Choose a mood number from 1 to 10.');$('mood').reportValidity();return;}
 $('mood').setCustomValidity('');state.entries=[...state.entries,{at:new Date().toISOString(),mood,note:$('note').value.slice(0,2000)}].slice(-90);$('note').value='';persist();renderHistory();$('journal-status').textContent=remember?'Reflection added; check the storage status below.':'Reflection added for this session only.';
};$('mood').onchange=()=>$('mood').setCustomValidity('');
$('remember').onchange=()=>{
 const next=$('remember').checked;
 if(!next&&!removeSaved(storage)){$('remember').checked=remember;$('storage-status').textContent='Could not remove browser data. Saving remains enabled; clear this site’s storage in browser settings.';return;}
 remember=next;persist();
};
$('export').onclick=()=>{
 const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=el('a');a.href=url;a.download='sukoon-reflections-'+localDay()+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
$('restore').onclick=()=>$('restore-file').click();
$('restore-file').onchange=async()=>{
 const file=$('restore-file').files[0];if(!file)return;
 try{
  if(file.size>600000)throw Error('Choose an export smaller than 600 KB.');
  const incoming=parseBackup(await file.text());
  if(!confirm('Replace current bookmarks, activity records and reflections with '+incoming.entries.length+' reflections from this export? Export current data first if needed.'))return;
  state=incoming;historyLimit=7;renderResources();renderActivities();renderHistory();updateBookmarks();persist();$('journal-status').textContent='Export restored. Local saving preference was not changed.';
 }catch(error){$('storage-status').textContent=error.message;}
 finally{$('restore-file').value='';}
};
function clearVisible(){
 $('consult-form').reset();$('behaviour-form').reset();$('plan-form').reset();$('check-form').reset();$('suggestions').replaceChildren();$('note').value='';$('mood').value='';$('mood').setCustomValidity('');$('show-notes').checked=false;$('saved-only').checked=false;$('journal-status').textContent='';historyLimit=7;groundIndex=0;renderGround();stopBreath();
}
function renderState(){renderResources();renderHistory();renderActivities();updateBookmarks();}
$('erase').onclick=()=>{
 if(!confirm('Clear bookmarks, activities, plans and reflections from this app and browser? Exported files are not removed.'))return;
 const removed=removeSaved(storage);state=emptyState();remember=false;$('remember').checked=false;clearVisible();renderState();persist();
 if(!removed)$('storage-status').textContent='Session cleared. Browser data could not be removed; clear this site’s storage in browser settings before leaving.';
};
window.addEventListener('storage',event=>{
 if(event.key!==STORAGE_KEY&&event.key!==null)return;
 if(event.newValue===null){state=emptyState();remember=false;$('remember').checked=false;clearVisible();renderState();$('storage-status').textContent='Saved data was cleared in another tab. This tab was cleared too.';}
 else if(remember){const incoming=openSession(storage);state=incoming.state;remember=incoming.remember;$('remember').checked=remember;renderState();$('storage-status').textContent='Saved records changed in another tab and have been refreshed.';}
});
const network=()=>{$('offline-status').textContent=navigator.onLine?'':'You appear to be offline. Publisher links need internet access.';};window.addEventListener('online',network);window.addEventListener('offline',network);
function resume(){if(!document.hidden)renderActivities();else if(breathTimer)stopBreath('Paused while the app was away.');}
window.addEventListener('focus',resume);document.addEventListener('visibilitychange',resume);
renderState();setInterfaceLanguage(uiLanguage);network();
$('storage-status').textContent=initial.status==='saved'?'Saved records loaded from this browser.':initial.status==='unreadable'||initial.status==='unavailable'?'Saved data could not be read. Session mode is active; existing stored data has not been overwritten.':'Session only. Nothing is saved for the next visit.';
let swRegistration=null;
$('check-update').onclick=async()=>{
 if(!swRegistration){$('update-status').textContent='Update checks are unavailable. Open this app on its GitHub Pages HTTPS address.';return;}
 try{await swRegistration.update();if(!swRegistration.waiting)$('update-status').textContent='Update check requested. Keep this session open until any download completes.';}
 catch{$('update-status').textContent='Could not check for updates. Your current session is still available.';}
};
if('serviceWorker'in navigator){
 navigator.serviceWorker.addEventListener('controllerchange',()=>navigator.serviceWorker.controller?.postMessage({type:'CHECK_CACHE'}));
 navigator.serviceWorker.addEventListener('message',event=>{
  if(event.data?.type==='CACHE_STATUS')$('offline-status').textContent=text(event.data.ready?'cache-ready':'cache-incomplete',uiLanguage);
 });
 navigator.serviceWorker.register('./sw.js').then(registration=>{
  swRegistration=registration;
  const notify=()=>{if(registration.waiting)$('update-status').textContent=text('update-waiting',uiLanguage);};
  notify();registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',notify);});
  navigator.serviceWorker.ready.then(()=>navigator.serviceWorker.controller?.postMessage({type:'CHECK_CACHE'})).catch(()=>{});
 }).catch(()=>{$('offline-status').textContent='Offline caching is unavailable. The tools still work while this page stays open.';});
}
