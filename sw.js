// Change VERSION on every update of the app.
const VERSION = "v2-2026-11-07a";
const CORE = ["./", "index.html", "style.css", "app.js", "data/icons.js", "data/s1.js", "data/s2.js", "data/s3.js", "data/s4.js", "data/s5.js", "data/s6.js", "data/gloss.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // App files: network first (so updates arrive), offline copy as fallback.
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => {
      const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r;
    }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
    return;
  }
  if (url.host.endsWith("fonts.googleapis.com") || url.host.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(n => {
      const copy = n.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return n;
    })));
  }
});
