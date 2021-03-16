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
