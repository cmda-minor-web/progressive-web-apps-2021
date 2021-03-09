const fetch = require('node-fetch')

const fetcher = async (endpoint) => {
  const data = await fetch(endpoint)
  const response = await data.json()
  return response
}

const test = () => {
  console.log('hi')
}

module.exports = { fetcher, test }
