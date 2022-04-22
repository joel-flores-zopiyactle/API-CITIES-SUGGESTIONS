const express          = require('express')
const route            = express.Router()
const checkParamQ      = require('../middleware/cities.middleware')
const { searchCities } = require('../controllers/cities')

// GET  Cities
route.get('/search', checkParamQ, searchCities)


module.exports = route