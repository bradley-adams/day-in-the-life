const express = require('express')

const db = require('../dbFunctions')

const router = express.Router()

router.get('/', (req, res) => {
      res.send('Today is the first day of the rest of your life. <br>But so is tomorrow, so no pressure.')
    })

module.exports = router
