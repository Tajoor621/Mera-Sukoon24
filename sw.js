const CACHE='sukoon-shell-v0.5.0';
const SHELL=['./','./index.html','./styles.css','./bootstrap.mjs','./app.mjs','./i18n.mjs','./navigation.mjs','./core.mjs','./behaviour.mjs','./planner.mjs','./session.mjs','./resources.mjs','./manifest.webmanifest','./favicon.ico','./icons/favicon-16.png','./icons/favicon-32.png','./icons/icon-maskable-512.png','./branding/mera-sukoon24-original.png','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
const REQUIRED=SHELL.filter(path=>!path.endsWith('.png')&&!path.endsWith('.ico'));
const recovery=()=>new Response('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sukoon — offline recovery</title><main><h1>Some app files are unavailable</h1><p>The offline cache is incomplete. Reconnect, finish or export any working session in other tabs, close all Sukoon tabs and reopen. Your saved records have not been intentionally deleted. Do not clear site data unless you have a backup.</p><p>If you need immediate help, seek local emergency help or someone trusted nearby. This app cannot monitor your safety.</p><p lang="ur" dir="rtl">کچھ آف لائن فائلیں موجود نہیں۔ انٹرنیٹ سے رابطہ کریں، دوسرے ٹیب میں کام مکمل یا برآمد کریں، پھر تمام سکون ٹیب بند کر کے دوبارہ کھولیں۔ بیک اپ کے بغیر محفوظ نوٹس حذف نہ کریں۔</p><p><a href="./">Try opening Sukoon again</a></p></main></html>',{status:503,headers:{'Content-Type':'text/html; charset=utf-8','Content-Security-Policy':"default-src 'none'; base-uri 'none'; form-action 'none'",'Referrer-Policy':'no-referrer'}});
async function complete(cache){return (await Promise.all(REQUIRED.map(path=>cache.match(new URL(path,self.registration.scope).href)))).every(Boolean);}
// Install a complete release; open tabs retain their release until closed.
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).catch(async error=>{await caches.delete(CACHE);throw error;})));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sukoon-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url),base=new URL(self.registration.scope);
 if(url.origin!==base.origin)return;
 const asset=SHELL.find(path=>new URL(path,base).pathname===url.pathname);
 if(!asset)return;
 // Cache-first within this release; never mix modules from live deployments.
 event.respondWith(caches.open(CACHE).then(async cache=>{
  if(event.request.mode==='navigate'&&!(await complete(cache)))return recovery();
  return (await cache.match(new URL(asset,base).href))||new Response('This offline file is missing. Reconnect and reopen Sukoon.',{status:503,headers:{'Content-Type':'text/plain'}});
 }).catch(()=>event.request.mode==='navigate'?recovery():new Response('Offline storage is unavailable.',{status:503})));
});
self.addEventListener('message',event=>{
 if(event.data?.type!=='CHECK_CACHE')return;
 event.waitUntil(caches.open(CACHE).then(complete).then(ready=>event.source?.postMessage({type:'CACHE_STATUS',ready})).catch(()=>event.source?.postMessage({type:'CACHE_STATUS',ready:false})));
});
