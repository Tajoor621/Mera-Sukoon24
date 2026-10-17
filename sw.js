const CACHE='sukoon-shell-v0.4.0';
const SHELL=['./','./index.html','./styles.css','./app.mjs','./core.mjs','./behaviour.mjs','./planner.mjs','./session.mjs','./resources.mjs','./manifest.webmanifest','./icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
// Install a complete release; open tabs retain their release until closed.
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sukoon-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url),base=new URL(self.registration.scope);
 if(url.origin!==base.origin)return;
 const asset=SHELL.find(path=>new URL(path,base).pathname===url.pathname);
 if(!asset)return;
 // Cache-first within this release; never mix modules from live deployments.
 event.respondWith(caches.open(CACHE).then(cache=>cache.match(new URL(asset,base).href)).then(response=>response||new Response('App cache is incomplete. Close Sukoon tabs, reconnect and reopen.',{status:503,headers:{'Content-Type':'text/plain'}})));
});
