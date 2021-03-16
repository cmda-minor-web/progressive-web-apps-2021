export const inputSlider = (item) => {
  const elem = document.createElement('input')

  elem.type = item[0]
  elem.setAttribute('min', item[1])
  elem.setAttribute('max', item[2])
  elem.setAttribute('value', item[3])
  elem.setAttribute('step', item[4])
  elem.setAttribute('data-filter', item[5])
  elem.setAttribute('data-scale', item[6])
  elem.setAttribute('id', item[7])

  return elem
}
