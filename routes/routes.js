const express = require('express')

const db = require('../dbFunctions')

const router = express.Router()

let score = 0

//Route for home page
router.get('/', (req, res) => {

  res.render('home')
})

router.get('/scenes/:id', (req, res) => {
  console.log('Trying to load a scene')
  db.getScene(req.params.id)
  .then ((data) => {
    res.render('scenes', data)
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
})




module.exports = router
