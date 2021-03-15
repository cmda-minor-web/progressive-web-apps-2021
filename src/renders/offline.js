// Error route function
const offline = async (req, res) => {
  try {
    res.render('offline', {
      pageInfo: {
        style: {
          globalStyle: '../css/index.css',
          pageStyle: '../css/pages/error.css',
        },
        scripts: {
          script: '/js/script.js',
        },
        PageTitle: 'Offline | PhotoPaint',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { offline }
