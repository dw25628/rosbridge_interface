var cacheName = 'moab-v0.0.1';// Update this value to force the update of the cache
var filesToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/dashboard.js',
  './js/gps_map.js',
  './js/logging.js',
  './js/ros_connection.js',
  './js/velocity_chart.js',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});