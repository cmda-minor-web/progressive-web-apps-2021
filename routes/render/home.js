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
