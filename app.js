const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const path = require('path')
const router = require('./routes/router')

const app = express()
const port = 8080
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: 'views/partials',
  extname: '.hbs',

  helpers: {
    listen: function (input) {
      return console.log(input)
    },
  },
})

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.use(express.static('public'))
app.use('/', router)
// app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, function () {
  console.log(`App is listening on ${port}!`)
})
