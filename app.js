// Imports and handlebars setup
const express = require('express'),
  app = express(),
  path = require('path'),
  expressHandlebars = require('express-handlebars'),
  router = require('./src/routes/router'),
  templates = path.join(__dirname, 'src/views'),
  port = process.env.PORT || 8080,
  hbs = expressHandlebars.create({
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
  .use(express.static('static'))
  .use('/', router)

// Launch application
app.listen(port, function () {
  console.log(`App can be opened on http://localhost:${port}`)
  console.log(`App is listening on ${port}!`)
})
