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
    let response = await fetcher(endpoint)

    res.render('home', {
      data: response,
      styles: 'home.css',
      PageTitle: 'PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

const homePost = async (req, res) => {
  try {
    let query = req.body.searchQuery
    let endpoint
    if (query === '') {
      return (endpoint = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`)
    } else {
      endpoint = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&per_page=33&order_by=popular`
    }
    let response = await fetcher(endpoint)
    res.render('home', {
      data: response.results,
      styles: 'home.css',
      PageTitle: 'PhotoPaint',
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
    let response = await fetcher(endpoint)

    res.render('details', {
      data: response,
      styles: 'editor.css',
      PageTitle: 'Editor | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

const error = async (req, res) => {
  try {
    res.render('404', {
      styles: 'error.css',
      PageTitle: 'Page Not Found | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

router.get('/', home)
router.post('/', urlencodedParser, homePost)
router.get('/detail/:id', detail)
router.get('/*', error)

module.exports = router
