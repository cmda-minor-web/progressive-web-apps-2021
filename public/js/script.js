// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker
//       .register('/service-worker.js', { scope: './' })
//       .then((registration) => {
//         console.log(
//           'ServiceWorker registration successful with scope: ',
//           registration
//         )
//       })
//       .catch((err) => {
//         console.log('ServiceWorker registration failed: ', err)
//       })
//   })
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function (registration) {
      console.log('Service Worker Registered', registration)
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err)
    })
}
import { Home, Detail, Profile } from './pages/index.js'

const init = () => {
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
