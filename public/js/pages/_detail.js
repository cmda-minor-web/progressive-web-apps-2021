import {
  Button,
  Div,
  Details,
  inputSlider,
  Summary,
} from '../utils/components/elements/index.js'
import { filterElements } from '../utils/components/filterValues.js'

export const Detail = () => {
  // Add edit button
  const buttonArticle = document.querySelector('#buttons')
  const editButton = Button('Edit', 'editBtn')
  buttonArticle.appendChild(editButton)

  // Add div element for filter
  const elements = document.querySelector('#elements')
  const div = Div('filterElem')
  elements.appendChild(div)

  // Event for test button
  const test = document.querySelector('#editBtn')
  test.addEventListener('click', (event) => {
    div.classList.toggle('active')
    console.log('Button clicked')
  })

  // Apply filter to div elem
  const filterDiv = document.querySelector('#filterElem')
  filterElements.forEach((item) => {
    const details = Details()
    const summary = Summary(item.filter)
    const div = Div('slider')
    const inputRange = inputSlider(Object.values(item))

    filterDiv.appendChild(details)
    details.appendChild(summary)
    details.appendChild(div)
    div.appendChild(inputRange)
  })

  const firstEl = Array.from(filterDiv.childNodes)
  firstEl[0].setAttribute('open', 'true')

  const elem = Array.from(filterDiv.childNodes)

  elem.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Close all the details that are not targetDetail.
      elem.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open')
        }
      })
    })
  })

  let CanVas = document.querySelector('#selectedImg')
  let applyControls = document.querySelectorAll('input[type=range]')
  let applyFilters = document.querySelectorAll('#applyFilter')
  let computedFilters

  // When editing, applying filters to canvas
  applyFilters.forEach((item) => {
    item.addEventListener('change', function () {
      computedFilters = ''
      applyControls.forEach((elem) => {
        computedFilters +=
          elem.getAttribute('data-filter') +
          '(' +
          elem.value +
          elem.getAttribute('data-scale') +
          ') '
      })
      CanVas.style.filter = computedFilters
      return computedFilters
    })
    return computedFilters
  })
}
