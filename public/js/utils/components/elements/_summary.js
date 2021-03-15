export const Summary = (filterItem) => {
  const elem = document.createElement('summary')
  const textNode = document.createTextNode(filterItem)

  elem.appendChild(textNode)

  return elem
}
