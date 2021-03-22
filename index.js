const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fetch = require('node-fetch');
const endpointOne = 'https://ghibliapi.herokuapp.com/films';
const endpointTwo = 'https://ghibliapi.herokuapp.com/people';

// Using static files from static directory
app.use(express.static('public'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/css', express.static(__dirname + 'public/css'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get('/movies', async (req, res) => {
    fetch(endpointOne)
    .then(resp => resp.json())
    .then(data => {
      const movies = data
      res.render('index.ejs', { movies });
    })
});

app.get('/people', async (req, res) => {
  fetch(endpointTwo)
  .then(resp => resp.json())
  .then(dataPeople => {
    const people = dataPeople
    res.render('people.ejs', { people });
  })
});

app.get('/movies/:id', function (req, res) {
  let id = req.params.id
  fetch(endpointOne)
  .then(show => show.json())
  .then (dataDetailpage => {
    let filtermovie = dataDetailpage.filter(movie => movie.id == id)[0]
    res.render('moviedetails.ejs', {filtermovie});
  })
});

app.get('/people/:name', function (req, res) {
  let name = req.params.name
  fetch(endpointTwo)
  .then(show => show.json())
  .then (peopleDetailpage => {
    let filterpeople = peopleDetailpage.filter(people => people.name == name)[0]
    res.render('peopledetails.ejs', {filterpeople});
  })
});

app.get("/offline", (req, res) => {
  res.render("offline.ejs");
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));