const { fetcher } = require('../../utils/fetch')
require('dotenv').config()

const detail = async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY

    const item = req._parsedUrl.path
    const endpointOne = `https://api.unsplash.com/photos/${item}?client_id=${API_KEY}`
    const endpointTwo = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=10&order_by=popular`

    const response = await fetcher(endpointOne)
    const recommendedResponse = await fetcher(endpointTwo)

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

module.exports = { detail }
