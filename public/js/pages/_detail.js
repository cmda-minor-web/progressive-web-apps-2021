import { Article, Button, Div } from '../utils/components/elements/index.js'
import { filterElements } from '../utils/filters/filterValues.js'
import { addFilter } from '../utils/filters/filter.js'

export const Detail = () => {
  // // Select needed HTML elements to implement buttons
  const btnWrapper = document.querySelector('#buttonWrapper')
  const allOptions = document.querySelector('#allOptions')

  // Add option button. To open popup block
  const options = Button('Options', 'optionBtn')
  btnWrapper.appendChild(options)

  // Add save button, to save files in localStorage
  const saveBtn = Button('Save', 'saveBtn')
  allOptions.appendChild(saveBtn)

  // Add edit button. To open filter pop-up
  const downBtn = Button('Download', 'downBtn')
  allOptions.appendChild(downBtn)

  addFilter()

  // // Add div element for filter
  // const elements = document.querySelector('#info')
  // const article = Article('filterElem')
  // const div = Div('filterWrapper')
  // elements.appendChild(article)
  // article.appendChild(div)

  // // Event for Edit button, to open edit popup
  // const editBtn = document.querySelector('#editBtn')
  // editBtn.addEventListener('click', (event) => {
  //   article.classList.toggle('active')
  // })

  // Event for option button
  const optionBtn = document.querySelector('#optionBtn')
  optionBtn.addEventListener('click', (event) => {
    allOptions.classList.toggle('active')

    if (allOptions.classList.contains('active')) {
      optionBtn.innerHTML = 'Close'
    } else {
      optionBtn.innerHTML = 'Options'
    }
  })

  // // Event for Edit button, to open edit popup
  // const editBtn = document.querySelector('#editBtn')
  // editBtn.addEventListener('click', (event) => {
  //   article.classList.toggle('active')
  // })
}
