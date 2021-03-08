const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 8080

// const homePage = async (req, res) => {
//   try {
//     console.log('home')
//     res.send('home')
//   } catch (err) {
//     console.log(err)
//   }
// }

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', async (req, res) => {
  try {
    res.render('home')
  } catch (err) {
    console.log(err)
  }
})

app.get('/detail', async (req, res) => {
  try {
    res.render('detail')
  } catch (err) {
    console.log(err)
  }
})

app.get('/*', async (req, res) => {
  try {
    res.render('404')
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, function () {
  console.log(`App is listening on ${port}!`)
})
