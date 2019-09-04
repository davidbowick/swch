var cacheName = 'swch';
var filesToCache = [
  // '/',
  '/css/app.css',
  '/js/app.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(precache());
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(fromNetwork(e.request, 400).catch(function() {
    return fromCache(e.request);
  }));
});

function precache() {
  return caches.open(cacheName).then(function(cache) {
    return cache.addAll(filesToCache);
  });
}

function fromNetwork(request,timeout) {
  // console.log('fromNetwork');
  return new Promise(function(fulfill,reject) {
    var timeoutId = setTimeout(reject,timeout);
    fetch(request).then(function(response) {
      clearTimeout(timeoutId);
      fulfill(response);
    }, reject);
  });
}

function fromCache(request) {
  console.log('fromCache');
  return caches.open(cacheName).then(function(cache) {
    return cache.match(request).then(function(matching) {
      return matching || Promise.reject('no-match');
    });
  });
}