export const Text = (item) => {
  const elem = document.createElement('p')
  const textNode = document.createTextNode(item)

  elem.appendChild(textNode)

  return elem
}
