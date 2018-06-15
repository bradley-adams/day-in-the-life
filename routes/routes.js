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


router.post('/goToNext/', (req, res) => {
  console.log("b : ", req.body)
  let consObj = {};
  consObj.nextScene = req.body.next;
  db.getChoice(parseInt(req.body.choices))
  .then( (choice) => {
    consObj.points = choice.points;
    score += consObj.points;
    consObj.consequences = choice.consequences;
    console.log("Our cons is: "+ consObj.nextScene + ","+consObj.points+","+consObj.consequences)
    res.render('cons', consObj);
  })
  
  
})




module.exports = router
