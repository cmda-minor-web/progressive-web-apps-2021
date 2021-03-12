// Profile route function
const profile = async (req, res) => {
  try {
    res.render('profile', {
      style: '../css/index.css',
      stylePage: '../css/pages/profile.css',
      PageTitle: 'Profile | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { profile }
