const CACHE_NAME = 'my-pwa-cache-v2';
const routes = [
    '/',
    '/manifest.json',
    '/css/style.css',
    '/js/site.js'
];

// Install the service worker and cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(routes); // ✅ CORRECT
            })
    );
});

// Activate the service worker and remove old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames =>
                Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== CACHE_NAME) {
                            console.log('[ServiceWorker] Deleting old cache:', cache);
                            return caches.delete(cache);
                        }
                    })
                )
            )
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request))
            .then(response => response || caches.match('/offline.html'))
    );
});
