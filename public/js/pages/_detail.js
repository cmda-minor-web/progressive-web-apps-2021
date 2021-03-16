import { Article, Button, Div } from '../utils/components/elements/index.js'
import { filterElements } from '../utils/components/filterValues.js'
import { addFilter } from '../utils/components/filter.js'

export const Detail = () => {
  // Select needed HTML elements to implement buttons
  const btnWrapper = document.querySelector('#buttonWrapper')
  const allBtns = document.querySelector('#buttons')

  // Add option button. To open popup block
  const options = Button('Options', 'optionBtn')
  btnWrapper.appendChild(options)

  // Add edit button. To open filter pop-up
  const editButton = Button('Edit', 'editBtn')
  allBtns.appendChild(editButton)

  // Add div element for filter
  const elements = document.querySelector('#info')
  const article = Article('filterElem')
  const div = Div('filterWrapper')
  elements.appendChild(article)
  article.appendChild(div)

  // Event for Edit button, to open edit popup
  const editBtn = document.querySelector('#editBtn')
  editBtn.addEventListener('click', (event) => {
    article.classList.toggle('active')
  })

  // Event for option button
  const optionBtn = document.querySelector('#optionBtn')
  optionBtn.addEventListener('click', (event) => {
    allBtns.classList.toggle('active')
  })

  addFilter()
}
