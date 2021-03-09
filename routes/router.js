const express = require('express')
const bodyParser = require('body-parser')
const { fetcher } = require('../utils/data/fetch')
require('dotenv').config()

const router = express.Router()
const API_KEY = process.env.API_KEY
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const home = async (req, res) => {
  try {
    let endpoint = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`
    let response = await fetcher(endpoint)

    res.render('home', {
      data: response,
      style: 'home.css',
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
      style: 'home.css',
      PageTitle: 'PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

const detail = async (req, res) => {
  try {
    let item = req._parsedUrl.path
    let endpointOne = `https://api.unsplash.com/photos/${item}?client_id=${API_KEY}`
    let endpointTwo = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=10&order_by=popular`

    let response = await fetcher(endpointOne)
    let recommendedResponse = await fetcher(endpointTwo)

    console.log(response)

    res.render('details', {
      data: response,
      recommended: recommendedResponse,
      style: 'editor.css',
      PageTitle: 'Editor | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

const profile = async (req, res) => {
  try {
    res.render('home', {
      style: 'profile.css',
      PageTitle: 'Profile | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

const error = async (req, res) => {
  try {
    res.render('error', {
      style: 'error.css',
      PageTitle: 'Page Not Found | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

router.get('/', home)
router.post('/', urlencodedParser, homePost)
router.get('/:id', detail)
router.get('/profile', profile)
router.get('/*', error)

module.exports = router
