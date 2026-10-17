import {STORAGE_KEY,emptyState,cleanState} from './core.mjs';
export function openSession(storage){
 try{const raw=storage?.getItem(STORAGE_KEY);if(raw==null)return {remember:false,state:emptyState(),status:'session'};const parsed=JSON.parse(raw);if(parsed?.version!==1)return {remember:false,state:emptyState(),status:'unreadable'};return {remember:true,state:cleanState(parsed),status:'saved'};}
 catch{return {remember:false,state:emptyState(),status:'unavailable'};}
}
export function removeSaved(storage){try{storage?.removeItem(STORAGE_KEY);return true;}catch{return false;}}
export function parseBackup(text){
 if(typeof text!=='string'||text.length>600000)throw Error('Choose a Sukoon JSON export smaller than 600 KB.');
 let raw;try{raw=JSON.parse(text);}catch{throw Error('This file is not valid JSON. Nothing was changed.');}
 if(!raw||raw.version!==1||!Array.isArray(raw.entries)||!Array.isArray(raw.saved)||!Array.isArray(raw.done))throw Error('This is not a supported Sukoon export. Nothing was changed.');
 const result=cleanState(raw);
 if(result.entries.length!==raw.entries.length||result.entries.some((e,i)=>e.note!==raw.entries[i].note)||result.saved.length!==raw.saved.length||result.done.length!==raw.done.length)throw Error('This export contains invalid or excessive records. Nothing was changed.');
 return result;
}
