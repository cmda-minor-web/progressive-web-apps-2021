const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/router')

const app = express()
const port = 8080

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('static'))
app.use('/', router)

app.listen(port, function () {
  console.log(`App is listening on ${port}!`)
})
