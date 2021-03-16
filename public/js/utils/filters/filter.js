import {
  Button,
  Div,
  Text,
  Details,
  inputSlider,
  Summary,
} from '../components/elements/index.js'
import { filterElements } from './filterValues.js'

export const addFilter = () => {
  // Apply filter to div elem
  const wrapper = document.querySelector('#allOptions')
  const editor = Div('editor')
  wrapper.appendChild(editor)

  filterElements.forEach((item) => {
    const details = Details()
    const summary = Summary(item.filter)
    const div = Div('slider')
    const inputRange = inputSlider(Object.values(item))

    editor.appendChild(details)
    details.appendChild(summary)
    details.appendChild(div)
    div.appendChild(inputRange)
  })

  const firstEl = Array.from(editor.childNodes)
  console.log(firstEl)
  firstEl[0].setAttribute('open', 'true')

  const elem = Array.from(editor.childNodes)

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

  const saveBtn = document.querySelector('#saveBtn')
  saveBtn.addEventListener('click', (event) => {
    console.log('saved')
    popUp()
    let oldItems = JSON.parse(localStorage.getItem('images')) || []
    let newItem = {
      image: document.querySelector('#selectedImg').currentSrc,
      styles: computedFilters,
    }
    oldItems.push(newItem)
    localStorage.setItem('images', JSON.stringify(oldItems))
    console.log(newItem)
  })

  const downBtn = document.querySelector('#downBtn')
  downBtn.addEventListener('click', (event) => {
    console.log('download')
  })
}

const popUp = () => {
  const main = document.querySelector('main')
  const div = Div('popup')
  const text = Text('Image saved to profile.')
  const button = Button('X', 'closePopup')
  main.appendChild(div)
  div.appendChild(text)
  div.appendChild(button)

  const closePopup = document.querySelector('#closePopup')
  closePopup.addEventListener('click', (event) => {
    const elem = document.querySelector('#popup')
    elem.parentNode.removeChild(elem)
  })
}

// const buttons = document.querySelector('#buttons')

// const editButton = Button('Edit', 'editBtn')

// buttons.appendChild(editButton)

// const test = document.querySelector('#editBtn')
// test.addEventListener('click', (event) => {
//   console.log('test')
// })
