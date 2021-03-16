const staticCacheName = "site-static";
const assets = [
  "/",
  "/index.js",
  "/offline",
  "/css/style.css",
  "/img/logo.png",
  "/img/movie1.jpg",
  "/img/movie2.jpg",
  "/img/movie3.jpg",
];

// installed event
self.addEventListener("install", (event) => {
  console.log("install");
  
  // pre-cache offline page and update cache automaticly
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll(assets).then(() => self.skipWaiting());
    })
    );
  });
  
  // activate event
  self.addEventListener("activate", () => {
    console.log("active");
  });
  
  self.addEventListener("fetch", (event) => {
    console.log("fetch event for: ", event.request.url);
    
    event.respondWith(
      caches.open(CORE_CACHE_NAME).then(cache => {
        return cache.match(event.request)
        .then(response => {
          if(response) {
            return response
          }
          return fetch(event.request)
          .then(response => {
            cache.put(event.request, response.clone())
            return response
          })
        }).catch((err) => {
          return caches.open(CORE_CACHE_NAME).then(cache => cache.match('/offline'))
        })
      })
      )
      
    })