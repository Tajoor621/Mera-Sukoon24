const CACHE='sukoon-shell-v0.2.0';
const SHELL=['./','./index.html','./styles.css','./app.mjs','./core.mjs','./resources.mjs','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sukoon-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url),base=new URL(self.registration.scope);
 if(url.origin!==base.origin)return;
 // Only app assets are cached. Never cache external books, notes or arbitrary pages.
 const asset=SHELL.find(path=>new URL(path,base).pathname===url.pathname);
 if(!asset)return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(new URL(asset,base).href,copy)));}return response;}).catch(()=>caches.match(new URL(asset,base).href).then(response=>response||new Response('Offline cache is not ready. Reconnect and reload.',{status:503,headers:{'Content-Type':'text/plain'}}))));
});
