const CACHE_NAME = 'ge-manager-shell-v4';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event => { const req = event.request; if (req.method !== 'GET') return; event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(resp => { if (resp && resp.ok && new URL(req.url).origin === self.location.origin) { const copy=resp.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)); } return resp; }).catch(()=>caches.match('./index.html')))); });
