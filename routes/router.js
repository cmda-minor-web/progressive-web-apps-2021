const express = require('express');
const router = express.Router();

// Pages required
const homepage = require('./src/index');
const carousel = require('./src/carousel');

// Make routes
router.use('/', homepage);
router.use('/', carousel);


module.exports = router;
