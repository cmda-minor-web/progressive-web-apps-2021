if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker Registered', registration)
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) =>
        console.log(`Service worker registered ${registration}`)
      )
      .catch((err) => console.log(`Service worker not registered ${err}`))
  })
}

import { Home, Detail, Profile } from './pages/index.js'
import { LocalStorageSetup } from './utils/storage/localStorage.js'

const init = () => {
  // Insert local Storage
  LocalStorageSetup()

  if (window.location.pathname === '/') {
    Home()
  } else if (window.location.pathname === '/profile') {
    Profile()
  } else if (window.location.pathname.includes('/image/')) {
    Detail()
  } else {
    console.log('other')
  }
}

init()
