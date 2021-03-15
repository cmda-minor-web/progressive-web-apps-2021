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
