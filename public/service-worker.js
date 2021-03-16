const cacheName = 'myCache'
const cacheFiles = [
  // Files to save in cached memory
  './css/index.css',
  './script.js',
  '/offline/',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;900&display=swap',
]

self.addEventListener('install', (event) => {
  // console.log('[SW] Installed')
  self.skipWaiting()

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[SW] caching cacheFiles')
      return cache.addAll(cacheFiles).then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', (event) => {
  // console.log('[SW] Activated')
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((thisCache) => {
          if (thisCache.includes('myCache') && thisCache !== cacheName) {
            return caches.delete(thisCache)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', (event) => {
  // console.log(`[SW] Fetch: ${event.request.url}`)

  let getMethod = event.request.method === 'GET'
  let path = cacheFiles.includes(getPathName(event.request.url))

  if (getMethod && path) {
    console.log(`core get request: ${event.request.url}`)
    event.respondWith(
      caches.open(cacheName).then((cache) => cache.match(event.request.url))
    )
  } else if (isHtmlGetRequest(event.request)) {
    event.respondWith(
      caches
        .open('html-runtime-cache')
        .then((cache) => cache.match(event.request))
        .then((response) =>
          response
            ? response
            : fetchAndCache(event.request, 'html-runtime-cache')
        )
        .catch(() => {
          return caches
            .open(cacheName)
            .then((cache) => cache.match('/offline/'))
        })
    )
  }
})

const getPathName = (requestUrl) => {
  // get pathnames to receive info
  const url = new URL(requestUrl)
  console.log(url.pathname)
  return url.pathname
}

const fetchAndCache = (request, cachename) => {
  return fetch(request).then((response) => {
    const clone = response.clone()
    caches.open(cachename).then((cache) => cache.put(request, clone))
    return response
  })
}

const isHtmlGetRequest = (request) => {
  // Check for HTML get request
  return (
    request.method === 'GET' &&
    request.headers.get('accept') !== null &&
    request.headers.get('accept').indexOf('text/html') > -1
  )
}
