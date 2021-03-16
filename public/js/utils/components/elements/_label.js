export const Label = (labelText) => {
  const elem = document.createElement('label')
  const textNode = document.createTextNode(labelText)

  elem.appendChild(textNode)
  elem.innerHTML.charAt(0).toUpperCase()

  return elem
}
