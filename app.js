const express = require('express')
const path = require('path')
const router = require('./routes/router')

const exphbs = require('express-handlebars')
require('dotenv').config()

const app = express()
const port = 8080
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: 'views/partials',
  extname: '.hbs',
  helpers: {
    listen: (input) => {
      return console.log(input)
    },
  },
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.use(express.static('static'))
app.use('/', router)

app.listen(port, function () {
  console.log(`App can be opened on http://localhost:${port}`)
  console.log(`App is listening on ${port}!`)
})
