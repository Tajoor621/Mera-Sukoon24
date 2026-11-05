// Session-only reading comfort. These choices are not part of the journal export.
export const COMFORT_KEY='sukoon-comfort-v1';
export const textSizes=['comfortable','large','larger'];
export const themes=['device','paper','dusk'];
export const quietLines=[
 {en:'You do not have to finish the whole day at once. One quiet page is enough.',roman:'Aap ko poora din aik saath mukammal nahi karna. Aik sukoon wali safha kaafi hai.',ur:'آپ کو پورا دن ایک ساتھ مکمل نہیں کرنا۔ ایک سکون والا صفحہ کافی ہے۔'},
 {en:'A slow breath and a kind sentence can sit beside whatever today holds.',roman:'Aik aahista saans aur aik narm jumla aaj ke saath baith saktay hain.',ur:'ایک آہستہ سانس اور ایک نرم جملہ آج کے ساتھ بیٹھ سکتے ہیں۔'},
 {en:'Rest is part of living, not a prize you have to earn.',roman:'Araam zindagi ka hissa hai, koi inaam nahi jo kamaana pade.',ur:'آرام زندگی کا حصہ ہے، کوئی انعام نہیں جو کمانا پڑے۔'},
 {en:'If the house feels full, a few quiet minutes can still be yours.',roman:'Agar ghar bhara mehsoos ho, kuch khamosh minutes phir bhi aap ke ho saktay hain.',ur:'اگر گھر بھرا محسوس ہو، کچھ خاموش منٹ پھر بھی آپ کے ہو سکتے ہیں۔'},
 {en:'Reading can be a place to set a weight down for a little while.',roman:'Parhai thori der ke liye bojh rakhne ki jagah ho sakti hai.',ur:'پڑھائی تھوڑی دیر کے لیے بوجھ رکھنے کی جگہ ہو سکتی ہے۔'},
 {en:'You can move gently. Nothing here asks you to be impressive.',roman:'Aap narmi se chal saktay hain. Yahan kuch bhi aap se numayan hone ko nahi kehta.',ur:'آپ نرمی سے چل سکتے ہیں۔ یہاں کچھ بھی آپ سے نمایاں ہونے کو نہیں کہتا۔'},
 {en:'Water, a window, or one familiar sentence can be a small step today.',roman:'Pani, aik khirki, ya aik jani pehchani jumla aaj ka chhota qadam ho sakta hai.',ur:'پانی، ایک کھڑکی، یا ایک جانی پہچانی جملہ آج کا چھوٹا قدم ہو سکتا ہے۔'}
];
export function lineIndex(day=new Date().toISOString().slice(0,10)){
 let hash=0;for(const char of String(day))hash=(hash+char.codePointAt(0))%997;return hash%quietLines.length;
}
export function quietLine(language='en',day){
 const line=quietLines[lineIndex(day)];return line[language==='ur'||language==='roman'?language:'en'];
}
export function readComfort(storage){
 try{
  const raw=storage?.getItem(COMFORT_KEY);const data=raw?JSON.parse(raw):{};
  return {text:textSizes.includes(data.text)?data.text:'comfortable',theme:themes.includes(data.theme)?data.theme:'device'};
 }catch{return {text:'comfortable',theme:'device'};}
}
export function saveComfort(storage,value={}){
 const next={text:textSizes.includes(value.text)?value.text:'comfortable',theme:themes.includes(value.theme)?value.theme:'device'};
 try{storage?.setItem(COMFORT_KEY,JSON.stringify(next));}catch{/* This visit can still use the choice in memory. */}
 return next;
}
