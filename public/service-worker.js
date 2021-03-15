const cacheName = 'Cache'
const cacheFiles = [
  './css/index.css',
  './script.js',
  '/offline/',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap',
] // Files to save in cached memory

self.addEventListener('install', (event) => {
  console.log('[SW] Installed')

  self.skipWaiting()

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[SW] caching cacheFiles')
      return cache.addAll(cacheFiles).then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', (event) => {
  console.log('[SW] Activated')

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((thisCache) => {
          if (thisCache.includes('precache') && thisCache !== cacheName) {
            console.log('[SW] Deleted cached files from cache - ', thisCache)
            return caches.delete(thisCache)
          }
        })
      )
    }) // end caches.keys()
  ) // end e.waitUntil
})

self.addEventListener('fetch', (event) => {
  console.log('[SW] Fetch event for ', event.request.url)

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.open(cacheName).then((cache) => cache.match('/offline/'))
    })
  )

  // event.respondWith(
  //   caches.match(event.request).then((cachedResponse) => {
  //     if (cachedResponse) {
  //       console.log('Found in cache!')
  //       console.log(cachedResponse)
  //       return cachedResponse
  //     } else {
  //       return fetch(event.request)
  //     }
  //   })
  // )
  // e.respondWith(fetch(e.request))
})

// let cacheName = 'v3'
// let cacheFiles = [
//   './css/index.css',
//   './script.js',
//   '/offline/',
//   'https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap',
// ]

// self.addEventListener('install', (event) => {
//   console.log('[ServiceWorker] Installing')

//   // event.waitUntil(
//   //   caches.open(cacheName).then((cache) => {
//   //     console.log('[ServiceWorker] caching cacheFiles')
//   //     return cache.addAll(cacheFiles).then(() => self.skipWaiting())
//   //   })
//   // )
//   event.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       console.log('[ServiceWorker] Precaching files')
//       return cache.addAll(cacheFiles)
//     }) // end caches.open()
//   ) // end e.waitUntil
// })

// self.addEventListener('activate', (event) => {
//   console.log('[ServiceWorker] activate')

//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((thisCacheName) => {
//           if (
//             thisCacheName.includes('precache') &&
//             thisCacheName !== cacheName
//           ) {
//             console.log(
//               '[ServiceWorker] Removing cached files from old cache - ',
//               thisCacheName
//             )
//             return caches.delete(thisCacheName)
//           }
//         })
//       )
//       // return Promise.all(
//       //   cacheNames.map((myCache) => {
//       //     if (myCache !== cacheName) {
//       //       console.log('[ServiceWorker] Removing Cached Files from -', myCache)
//       //       return caches.delete(myCache)
//       //     }
//       //   })
//       // )
//     })
//   )
// })

// self.addEventListener('activate', (event) => {
//   console.log('[ServiceWorker] Activated')

//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((thisCacheName) => {
//           if (
//             thisCacheName.includes('precache') &&
//             thisCacheName !== precacheName
//           ) {
//             console.log(
//               '[ServiceWorker] Removing cached files from old cache - ',
//               thisCacheName
//             )
//             return caches.delete(thisCacheName)
//           }
//         })
//       )
//     }) // end caches.keys()
//   ) // end e.waitUntil
// })

// self.addEventListener('fetch', (event) => {
//   console.log('[ServiceWorker] Fetch event for ', event.request.url)
// })

// // self.addEventListener('fetch', (event) => {
// //   console.log('[ServiceWorker] fetch event for :', event.request.url)

// //   // Check HTML requests
// //   if (
// //     event.request.method('GET') &&
// //     event.request.headers.get('accept') !== null &&
// //     event.request.headers.get('accept').indexOf('text/html') > -1
// //   ) {
// //     event.respondWith(
// //       fetch(event.request).catch(() => {
// //         return caches.open(cacheName).then((cache) => cache.match('/offline/'))
// //       })
// //     )
// //   }
// // })

// // self.addEventListener('install', (event) => {
// //   console.log('install')

// //   event.waitUntil(
// //     caches.open('my-cache').then((cache) => {
// //       return cache.addAll(['/offline/']).then(() => {
// //         self.skipWaiting()
// //       })
// //     })
// //   )
// // })

// // self.addEventListener('activate', (event) => {
// //   console.log('activate')
// // })

// // self.addEventListener('fetch', (event) => {
// //   console.log('fetch event for: ', event.request.url)

// //   // HTML get request
// //   if (
// //     event.request.method('GET') &&
// //     event.request.headers.get('accept') !== null &&
// //     event.request.headers.get('accept').indexOf('text/html') > -1
// //   ) {
// //     event.respondWith(
// //       fetch(event.request).catch(() => {
// //         return caches.open('my-cache').then((cache) => {
// //           cache.match('/offline')
// //         })
// //       })
// //     )
// //   }
// // })
