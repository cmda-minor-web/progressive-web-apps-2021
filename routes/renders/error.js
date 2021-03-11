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

module.exports = { error }
