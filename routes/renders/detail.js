const { fetcher } = require('../../utils/fetch')
require('dotenv').config()
const API_KEY = process.env.API_KEY

const detail = async (req, res) => {
  try {
    let item = req._parsedUrl.path
    let endpointOne = `https://api.unsplash.com/photos/${item}?client_id=${API_KEY}`
    let endpointTwo = `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=10&order_by=popular`

    let response = await fetcher(endpointOne)
    let recommendedResponse = await fetcher(endpointTwo)

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
