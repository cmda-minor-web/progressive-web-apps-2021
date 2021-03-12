const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');
const endpointOne = 'https://ghibliapi.herokuapp.com/films';

// Using static files from static directory
app.use(express.static('public'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/css', express.static(__dirname + 'public/css'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    fetch(endpointOne)
    .then(resp => resp.json())
    .then(data => {
      const movies = data
      res.render('index.ejs', { movies });
    })
});

app.get('id', function (req, res) {
  res.render('detailpage.ejs');
});

app.listen(port, () => console.log(`App is running on port ${port}`));