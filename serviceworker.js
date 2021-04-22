const cacheName = 'app-cache-v2';
const resourcesToPrecache = [
    '/',
    '/index.html',
    '/logo.png',
    '/main.js'
];

//set up Precache -- promise to install
// Listen for install event, set callback
self.addEventListener('install', function(event) {
    console.log('Service worker installed');
    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching files');
                cache.addAll(resourcesToPrecache);
        })
            .then(() => self.skipWaiting())
    );
});

//activate service worker
self.addEventListener('activate', event => {
    console.log ('Service worker activated!');
    //Remove old caches
    event.waitUntil(
        caches.keys().then(cacheName => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});


//respond offline  -- fetch to serve cache first with network fallback
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});