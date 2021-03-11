const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const { home } = require('./renders/home')
const { homePost } = require('./renders/homePost')
const { detail } = require('./renders/detail')
const { profile } = require('./renders/profile')
const { error } = require('./renders/error')

router.get('/', home)
router.post('/', urlencodedParser, homePost)
router.get('/:id', detail)
router.get('/profile', profile)
router.get('/*', error)

module.exports = router
