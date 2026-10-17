import {resources,activities} from './resources.mjs';
import {filterResources,suggest,emptyState,readState,writeState,STORAGE_KEY,localDay} from './core.mjs';
const $=id=>document.getElementById(id);
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
let storage=null;try{storage=window.localStorage;}catch{/* Session mode remains available. */}
let remember=false;try{remember=storage?.getItem(STORAGE_KEY)!==null&&storage!==null;}catch{}
let state=remember?readState(storage):emptyState();$('remember').checked=remember;
function persist(){
 if(!remember){$('storage-status').textContent='Session only. Nothing is saved for the next visit.';return;}
 const ok=writeState(storage,state);
 $('storage-status').textContent=ok?'Saved in this browser only.':'Browser storage is unavailable or full. Changes are in this session only; export to keep them.';
}
function external(url,label){const a=el('a',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function card(r){
 const a=el('article',undefined,'panel card');
 a.append(el('small',r.publisher+' · '+r.format),el('h3',r.title),el('p',r.description),el('small',r.languages.join(' / ')+' · Free access · Page reviewed '+r.reviewed),external(r.url,'Read / find downloads ↗'));
 const b=el('button',state.saved.includes(r.id)?'Bookmarked ✓':'Bookmark','secondary');b.setAttribute('aria-pressed',String(state.saved.includes(r.id)));b.setAttribute('aria-label','Bookmark '+r.title);
 b.onclick=()=>{state.saved=state.saved.includes(r.id)?state.saved.filter(x=>x!==r.id):[...state.saved,r.id];persist();renderResources();};a.append(b);return a;
}
function renderResources(){const list=filterResources({query:$('search').value,topic:$('topic').value,language:$('language').value,savedOnly:$('saved-only').checked,saved:state.saved});$('resources').replaceChildren(...list.map(card));$('result-count').textContent=list.length?list.length+' resources. External pages need an internet connection.':'No matching resources. Try clearing a filter.';}
for(const tag of [...new Set(resources.flatMap(r=>r.tags))].sort()){$('topic').append(new Option(tag,tag));}
for(const id of ['search','topic','language','saved-only'])$(id).addEventListener('input',renderResources);
$('check-form').onsubmit=e=>{e.preventDefault();const result=suggest({concern:$('concern').value,ongoing:$('ongoing').checked,interfering:$('interfering').checked,unsafe:$('unsafe').checked});const nodes=[el('p',result.message)];if(result.urgent){const a=el('a','Go to human support');a.href='#support';nodes.push(a);}else{const grid=el('div',undefined,'grid');grid.append(...result.ids.map(id=>card(resources.find(r=>r.id===id))));nodes.push(grid);}$('suggestions').replaceChildren(...nodes);if(result.urgent){$('support').focus();}};
let breathTimer=null,deadline=0;
function stopBreath(message='Paused. You can return whenever you like.') {clearInterval(breathTimer);breathTimer=null;$('breath').classList.remove('running');$('breath-start').disabled=false;$('breath-stop').disabled=true;$('breath-status').textContent=message;}
$('breath-start').onclick=()=>{stopBreath();deadline=Date.now()+60000;$('breath').classList.add('running');$('breath-start').disabled=true;$('breath-stop').disabled=false;$('breath-status').textContent='Breathe at your own pace. 60 seconds remaining.';breathTimer=setInterval(()=>{const left=Math.max(0,Math.ceil((deadline-Date.now())/1000));if(!left)stopBreath('Your minute is complete. Notice how you feel; no particular result is required.');else $('breath-status').textContent='Breathe at your own pace. '+left+' seconds remaining.';},1000);};
$('breath-stop').onclick=()=>stopBreath();document.addEventListener('visibilitychange',()=>{if(document.hidden&&breathTimer)stopBreath('Paused while the app was away.');});
const ground=['Notice five things you can see.','Notice four things you can feel safely, such as the chair supporting you.','Notice three sounds around you.','Notice two scents, or two colours if scents are not comfortable.','Notice one taste already present, or one detail you appreciate.','Take a moment to notice the room. You can finish here.'];let groundIndex=0;
function renderGround(){$('ground-step').textContent=ground[groundIndex];$('ground-next').disabled=groundIndex===ground.length-1;}
$('ground-next').onclick=()=>{groundIndex=Math.min(ground.length-1,groundIndex+1);renderGround();};$('ground-reset').onclick=()=>{groundIndex=0;renderGround();};
function renderActivities(){const today=localDay();$('activities').replaceChildren(...activities.map(a=>{const n=el('article',undefined,'panel card');const key=today+':'+a.id;const complete=state.done.includes(key);const b=el('button',complete?'Done for today ✓':'Mark done','secondary');b.setAttribute('aria-pressed',String(complete));b.onclick=()=>{state.done=complete?state.done.filter(x=>x!==key):[...state.done,key].slice(-540);persist();renderActivities();};n.append(el('h3',a.label),el('p',a.text),external(resources.find(r=>r.id===a.source).url,'Why this may help ↗'),b);return n;}));}
function renderHistory(){const entries=state.entries;$('history-summary').textContent=entries.length?entries.length+' reflections (up to 90 retained). These are your own ratings, not clinical scores.':'No reflections yet. Skipping is fine.';$('history').replaceChildren(...entries.slice(-7).reverse().map(e=>el('li',new Date(e.at).toLocaleString()+' · Mood '+e.mood+'/10'+(e.note?'\n'+e.note:''))));}
$('journal').onsubmit=e=>{e.preventDefault();const mood=Number($('mood').value);if(!Number.isInteger(mood)||mood<1||mood>10){$('mood').setCustomValidity('Choose a mood number from 1 to 10.');$('mood').reportValidity();return;}$('mood').setCustomValidity('');state.entries=[...state.entries,{at:new Date().toISOString(),mood,note:$('note').value.slice(0,2000)}].slice(-90);$('note').value='';persist();renderHistory();};$('mood').onchange=()=>$('mood').setCustomValidity('');
$('remember').onchange=()=>{remember=$('remember').checked;if(!remember){try{storage?.removeItem(STORAGE_KEY);}catch{$('storage-status').textContent='Could not remove browser data. Clear this site’s storage in browser settings.';return;}}persist();};
$('export').onclick=()=>{const blob=new Blob([JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=el('a');a.href=url;a.download='sukoon-reflections-'+localDay()+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('erase').onclick=()=>{if(!confirm('Clear bookmarks, activities and reflections from this app and browser? Exported files are not removed.'))return;state=emptyState();remember=false;$('remember').checked=false;$('note').value='';$('mood').value='';let removed=true;try{storage?.removeItem(STORAGE_KEY);}catch{removed=false;}renderResources();renderHistory();renderActivities();persist();if(!removed)$('storage-status').textContent='Session cleared. Browser data could not be removed; clear this site’s storage in browser settings.';};
const network=()=>{$('offline-status').textContent=navigator.onLine?'':'You appear to be offline. Publisher links need internet access.';};window.addEventListener('online',network);window.addEventListener('offline',network);
renderResources();renderActivities();renderHistory();persist();network();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{$('offline-status').textContent='Offline caching is unavailable. The tools still work while this page stays open.';});
