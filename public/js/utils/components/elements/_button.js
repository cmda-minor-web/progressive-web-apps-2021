export const Button = (item, id) => {
  const elem = document.createElement('button')
  const textnode = document.createTextNode(item)
  elem.appendChild(textnode)
  elem.setAttribute('id', id)

  return elem
}
