const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {q: 'eminem'},
    headers: {
      'x-rapidapi-key': process.env.KEY,
      'x-rapidapi-host': process.env.HOST,
    },
  };

  axios.request(options).then(function(response) {
    console.log(response.data.data[0]);
    res.render('index.ejs', {
      data: response.data.data,
    });
  }).catch(function(error) {
    console.error(error);
  });
});

module.exports = router;
