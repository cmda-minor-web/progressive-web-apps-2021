export const Image = (item, className) => {
  const elem = document.createElement('img')

  elem.setAttribute('src', item)

  return elem
}
