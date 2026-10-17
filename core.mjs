import {resources} from './resources.mjs';
export function filterResources({query='',topic='',language='',savedOnly=false,saved=[]}={}) {
 const q=query.trim().toLocaleLowerCase();
 return resources.filter(r=>(!topic||r.tags.includes(topic))&&(!language||r.languages.includes(language))&&(!savedOnly||saved.includes(r.id))&&(!q||[r.title,r.publisher,r.description,...r.tags,...r.languages].join(' ').toLocaleLowerCase().includes(q)));
}
export const concerns=['stress','worry','low mood','sleep','motivation','self-kindness','connection'];
export function suggest({concern,ongoing=false,interfering=false,unsafe=false}={}) {
 if(unsafe)return {urgent:true,message:'Your immediate safety matters. Contact local emergency help or a trusted person nearby if you are in danger. This app cannot monitor you or arrange rescue.',ids:[]};
 const topic=concerns.includes(concern)?concern:'stress';
 return {urgent:false,message:(ongoing||interfering)?'Because this is continuing or affecting daily life, consider speaking with a qualified professional. These readings can support that conversation.':'Choose one small step that feels manageable. These suggestions reflect your selected topic; they are not a diagnosis or a clinical assessment.',ids:filterResources({topic}).slice(0,3).map(r=>r.id)};
}
export const STORAGE_KEY='sukoon-wellbeing-v1';
export function emptyState(){return {version:1,saved:[],entries:[],done:[]};}
export function cleanState(raw){
 if(!raw||raw.version!==1)return emptyState();
 const ids=new Set(resources.map(r=>r.id));
 return {version:1,saved:Array.isArray(raw.saved)?[...new Set(raw.saved.filter(x=>ids.has(x)))]:[],entries:Array.isArray(raw.entries)?raw.entries.filter(e=>e&&typeof e.at==='string'&&Number.isFinite(Date.parse(e.at))&&Number.isInteger(e.mood)&&e.mood>=1&&e.mood<=10&&typeof e.note==='string').slice(-90).map(e=>({at:e.at,mood:e.mood,note:e.note.slice(0,2000)})):[],done:Array.isArray(raw.done)?[...new Set(raw.done.filter(x=>typeof x==='string'&&/^\d{4}-\d{2}-\d{2}:(move|connect|learn|kind|notice|rest)$/.test(x)))].slice(-540):[]};
}
export function readState(storage){try{return cleanState(JSON.parse(storage.getItem(STORAGE_KEY)));}catch{return emptyState();}}
export function writeState(storage,state){try{storage.setItem(STORAGE_KEY,JSON.stringify(cleanState(state)));return true;}catch{return false;}}
export function localDay(date=new Date()){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
