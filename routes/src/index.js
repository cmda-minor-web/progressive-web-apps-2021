const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/', async (req, res) => {

  let data = new Array
  let json

  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

  
  if (localStorage.getItem('index')) {
    return res.render('index.ejs', {
        data: JSON.parse(localStorage.getItem('index'))
    })
  }


  for (let i = 0; i < 2; i++) {

    const options = {
      method: 'GET',
      url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${i}`,
      headers: {
        'x-rapidapi-key': process.env.KEY,
        'x-rapidapi-host': process.env.HOST,
      }
    }

    json = await axios.request(options).then(function(response) {
        data.push(response.data)
        return response.data
    }).catch(function(error) {
      console.error(error);
    });
  }
  if (json) {
  localStorage.setItem('index', JSON.stringify(data));
  return res.render('index.ejs', {
    data: data
  })
  }
});

module.exports = router;
