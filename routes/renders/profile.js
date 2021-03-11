require('dotenv').config()

const profile = async (req, res) => {
  try {
    res.render('home', {
      style: 'profile.css',
      PageTitle: 'Profile | PhotoPaint',
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { profile }
