// Imports and handlebars setup
const express = require('express')
const app = express()
const path = require('path')
const expressHandlebars = require('express-handlebars')
const router = require('./src/routes/router')
const templates = path.join(__dirname, 'src/views')
const port = process.env.PORT || 8080
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, './src/views/layouts'),
  partialsDir: './src/views/partials',
  extname: '.hbs',
  helpers: {
    listen: (input) => {
      return console.log(input)
    },
  },
})

// Middleware
app
  .engine('.hbs', hbs.engine)
  .set('view engine', '.hbs')
  .set('views', templates)
  .use(express.static('dist'))
  .use(router)

// Launch application
app.listen(port, function () {
  console.log(`App can be opened on http://localhost:${port}`)
})
