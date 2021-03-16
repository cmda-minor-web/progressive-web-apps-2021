import { Image, Text } from '../utils/components/elements/index.js'

export const Profile = () => {
  const storedImages = document.querySelector('#storedImages')
  const removeImagesBtn = document.querySelector('#removeImages')

  // Place data (localStorage) in prop element
  const props = JSON.parse(localStorage.getItem('images'))

  const text = Text('No saved images yet')

  if (props === null) {
    storedImages.appendChild(text)
    button.setAttribute('disabled', '')
  } else {
    props.forEach((item) => {
      const img = Image(item.image, 'savedImage')
      img.style.cssText = `filter: ${item.styles}`
      storedImages.appendChild(img)
    })
  }

  if (typeof removeImagesBtn != 'undefined' && removeImagesBtn != null) {
    removeImagesBtn.addEventListener('click', function () {
      localStorage.clear()
      location.reload(true)
    })
  }
}
