const express = require('express')
const bodyParser = require('body-parser')
const { fetcher } = require('../utils/fetch')

const router = express.Router()
const API_KEY = '4ftBvwb6tBA2A3rXw88yOTkwD9RlZSQOyZHDAdstiuE'
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const home = async (req, res) => {
  try {
    let endpoint = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`
    let data = await fetcher(endpoint)

    res.render('home', {
      data: data,
      styles: 'home.css',
    })
  } catch (err) {
    console.log(err)
  }
}

const homePost = async (req, res) => {
  try {
    // console.log('submitted')
    console.log(req.body.searchQuery)
    let query = req.body.searchQuery
    let endpoint = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&per_page=33&order_by=popular`
    // let data = await fetcher(endpoint)

    // let endpoint = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33`
    let data = await fetcher(endpoint)

    console.log(data)
    res.render('home', {
      data: data.results,
      styles: 'home.css',
    })
  } catch (err) {
    console.log(err)
  }
}

const detail = async (req, res) => {
  try {
    let pathID = req._parsedUrl.path
    let item = pathID.replace('/detail/', '')
    let endpoint = `https://api.unsplash.com/photos/${item}?client_id=${API_KEY}`
    let data = await fetcher(endpoint)
    // console.log(data)

    res.render('detail', { data: data, styles: 'detail.css' })
  } catch (err) {
    console.log(err)
  }
}

const error = async (req, res) => {
  try {
    res.render('404', { madeBy: 'jor', styles: 'error.css' })
  } catch (err) {
    console.log(err)
  }
}

router.get('/', home)
router.post('/', urlencodedParser, homePost)
router.get('/detail/:id', detail)
router.get('/*', error)

module.exports = router
