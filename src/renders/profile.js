// Profile route function
const profile = async (req, res) => {
  try {
    res.render('profile', {
      style: '../css/index.css',
      stylePage: '../css/pages/profile.css',
      PageTitle: 'Profile | PhotoPaint',
      pageInfo: {
        style: {
          globalStyle: '../css/index.css',
          pageStyle: '../css/pages/profile.css',
        },
        scripts: {
          script: '/js/script.js',
        },
        PageTitle: 'Profile | PhotoPaint',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { profile }
