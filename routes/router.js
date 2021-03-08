const express = require('express')
const fetch = require('node-fetch')

const test = async () => {
  const abc = await fetch(
    'https://api.unsplash.com/photos/?client_id=4ftBvwb6tBA2A3rXw88yOTkwD9RlZSQOyZHDAdstiuE&per_page=33&order_by=popular'
  )
  const res = await abc.json()
  console.log(res)
}

// import { createApi } from 'unsplash-js'

const router = express.Router()

// const unsplash = createApi({
//   accessKey: '4ftBvwb6tBA2A3rXw88yOTkwD9RlZSQOyZHDAdstiuE',
//   fetch: nodeFetch,
// })

const home = async (req, res) => {
  try {
    // test()

    res.render('home', { madeBy: 'jor', styles: 'home.css' })
  } catch (err) {
    console.log(err)
  }
}

const detail = async (req, res) => {
  try {
    res.render('detail', { madeBy: 'jor', styles: 'detail.css' })
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
router.get('/detail', detail)
router.get('/*', error)

module.exports = router
