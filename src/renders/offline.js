// Error route function
const offline = async (req, res) => {
  try {
    res.render('offline', {
      pageInfo: {
        style: {
          pageStyle: 'home.css',
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
