// Import packages and functions
const { fetcher } = require('./../utils/data/fetch')
require('dotenv').config()

// Home post method route function
const homePost = async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY

    const query = req.body.searchQuery
    let endpoint

    if (query === '') {
      return (endpoint = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`)
    } else {
      endpoint = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&per_page=33&order_by=popular`
    }

    let response = await fetcher(endpoint)

    res.render('home', {
      data: response.results,
      searchQuery: {
        hasQuery: true,
        query: query,
      },
      pageInfo: {
        style: {
          globalStyle: 'css/index.css',
          pageStyle: 'css/pages/home.css',
        },
        scripts: {
          script: '/js/script.js',
        },
        PageTitle: 'PhotoPaint',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { homePost }
