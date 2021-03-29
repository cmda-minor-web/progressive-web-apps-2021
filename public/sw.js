const CORE_CACHE = "site-static";
const assets = [
  "/",
  "/css/index.css",
  "/img/logo.png",
  "/img/Movie1.jpg",
  "/offline",
];

// installed event
self.addEventListener("install", (event) => {
  console.log("install");
  
  // pre-cache offline page and update cache automaticly
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => {
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
      caches.open(CORE_CACHE).then(cache => {
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
          return caches.open(CORE_CACHE).then(cache => cache.match("/offline"))
        })
      })
      )
      
    })