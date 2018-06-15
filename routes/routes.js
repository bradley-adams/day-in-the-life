const express = require('express')

const db = require('../dbFunctions')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

module.exports = router
