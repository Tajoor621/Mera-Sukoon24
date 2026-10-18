import {text} from './i18n.mjs';
export const secondaryTools=['checkin','behaviour','library','steps','reflect'];
export function openTool(document,id){
 const groups={'suggestions':'checkin','behaviour-report':'behaviour','history':'reflect','journal':'reflect'};
 const key=groups[id]||id;
 if(secondaryTools.includes(key)){const panel=document.getElementById('panel-'+key);if(panel)panel.open=true;}
 const target=document.getElementById(id);if(target){target.tabIndex=-1;target.focus();}return target;
}
export function configureNavigation(document,window,getLanguage){
 const $=id=>document.getElementById(id);
 for(const id of secondaryTools)$('panel-'+id).open=false;
 function followHash(){const id=window.location?.hash?.slice(1);if(id&&['main','planner','checkin','behaviour','library','calm','steps','reflect','privacy','support','device-help'].includes(id))openTool(document,id);}
 window.addEventListener('hashchange',followHash);followHash();
 document.addEventListener('click',event=>{const anchor=event.target?.closest?.('a[href^="#"]');if(anchor){const id=anchor.getAttribute('href').slice(1);if(id)openTool(document,id);}});
 $('expand-tools').onchange=()=>{for(const id of secondaryTools)$('panel-'+id).open=$('expand-tools').checked;};
 let step=0;const targets=['calm','planner','reflect'];
 function render(){const lang=getLanguage();$('tour-step').textContent=(step+1)+'/3 — '+text('tour'+(step+1),lang);$('tour-step').lang=lang==='ur'?'ur':lang==='roman'?'ur-Latn':'en-GB';$('tour-step').dir=lang==='ur'?'rtl':'ltr';$('tour-target').href='#'+targets[step];$('tour-next').disabled=step===2;$('tour-step').focus();}
 $('tour-start').onclick=()=>{step=0;$('tour').hidden=false;render();};
 $('tour-next').onclick=()=>{step=Math.min(step+1,2);render();};
 $('tour-dismiss').onclick=()=>{$('tour').hidden=true;$('tour-start').focus();};
 return {refreshTour:()=>{if(!$('tour').hidden)render();},reveal:id=>openTool(document,id)};
}
