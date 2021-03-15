import { Button } from './elements/index.js'

export const addFilter = () => {
  const buttons = document.querySelector('#buttons')

  const editButton = Button('Edit', 'editBtn')

  buttons.appendChild(editButton)

  const test = document.querySelector('#editBtn')
  test.addEventListener('click', (event) => {
    console.log('test')
  })
}
