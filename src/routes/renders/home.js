// Import packages and functions
const { fetcher } = require('../../utils/fetch')
require('dotenv').config()

// Home route function
const home = async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY

    const endpoint = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`
    const response = await fetcher(endpoint)

    res.render('home', {
      data: response,
      style: 'css/index.css',
      stylePage: 'css/pages/home.css',
      PageTitle: 'PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { home }
