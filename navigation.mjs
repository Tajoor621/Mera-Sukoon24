import {text} from './i18n.mjs';
export const secondaryTools=['checkin','behaviour','library','steps','reflect'];
export function openTool(document,id){
 const groups={'consult-result':'consultation','suggestions':'checkin','behaviour-report':'behaviour','history':'reflect','journal':'reflect'};
 const key=groups[id]||id;
 if(secondaryTools.includes(key)){const panel=document.getElementById('panel-'+key);if(panel)panel.open=true;}
 const target=document.getElementById(id);if(target){target.tabIndex=-1;target.focus();}return target;
}
const navCurrent={consultation:'nav-consult',planner:'nav-plan',library:'nav-read',behaviour:'nav-behaviour',calm:'nav-calm',reflect:'nav-reflect',support:'nav-support'};
const pageIds=['main','consultation','planner','checkin','behaviour','library','calm','steps','reflect','privacy','support','device-help'];
function markCurrent(document,id){
 for(const [section,navId] of Object.entries(navCurrent)){
  const node=document.getElementById(navId);if(!node?.setAttribute)continue;
  if(section===id)node.setAttribute('aria-current','true');
  else if(typeof node.removeAttribute==='function')node.removeAttribute('aria-current');
 }
}
export function configureNavigation(document,window,getLanguage){
 const $=id=>document.getElementById(id);
 for(const id of secondaryTools)$('panel-'+id).open=false;
 function followHash(){const id=window.location?.hash?.slice(1);if(id&&pageIds.includes(id)){openTool(document,id);markCurrent(document,id);}}
 window.addEventListener('hashchange',followHash);followHash();
 document.addEventListener('click',event=>{const anchor=event.target?.closest?.('a[href^="#"]');if(!anchor)return;const id=anchor.getAttribute('href')?.slice(1);if(!id)return;openTool(document,id);if(pageIds.includes(id))markCurrent(document,id);});
 $('expand-tools').onchange=()=>{for(const id of secondaryTools)$('panel-'+id).open=$('expand-tools').checked;};
 let step=0;const targets=['calm','planner','reflect'];
 function render(){const lang=getLanguage();$('tour-step').textContent=(step+1)+'/3 — '+text('tour'+(step+1),lang);$('tour-step').lang=lang==='ur'?'ur':lang==='roman'?'ur-Latn':'en-GB';$('tour-step').dir=lang==='ur'?'rtl':'ltr';$('tour-target').href='#'+targets[step];$('tour-next').disabled=step===2;$('tour-step').focus();}
 $('tour-start').onclick=()=>{step=0;$('tour').hidden=false;render();};
 $('tour-next').onclick=()=>{step=Math.min(step+1,2);render();};
 $('tour-dismiss').onclick=()=>{$('tour').hidden=true;$('tour-start').focus();};
 return {refreshTour:()=>{if(!$('tour').hidden)render();},reveal:id=>{openTool(document,id);const key={'consult-result':'consultation','suggestions':'checkin','behaviour-report':'behaviour','history':'reflect','journal':'reflect','plan-result':'planner'}[id]||id;if(pageIds.includes(key))markCurrent(document,key);}};
}
