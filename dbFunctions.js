const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getScene: getScene
}

function getScenes (testConn) {
  const conn = testConn || connection
  return conn('scenes')
  .join('choices', 'scenes.id', 'choices.scene_id')
  .select('scenes.id as id', 'scenes.title', 'scenes.text as sceneText', 'scenes.next', 'scenes.image', 'choices.choice_id', 'choices.text as choiceText', 'choices.points', 'choices.consequences')
}

function getScene (id, testConn) {
  const conn = testConn || connection
  return getScenes(conn).where('id', id)
  .then((untidy) => {
    return tidyData(untidy)
  })
}


function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function tidyData (input) {
  let tidied = {}
  tidied.id = input[0].id //Assume all ids are the same
  tidied.title = input[0].title
  tidied.sceneText = input[0].sceneText
  tidied.image = input[0].image
  tidied.next = input[0].next
  tidied.choices = []
  for (let choice of input) {
    let newChoice = {}
    newChoice.choice_id = choice.choice_id
    newChoice.choiceText = choice.choiceText
    newChoice.points = choice.points
    newChoice.consequences = choice.consequences
    tidied.choices.push(newChoice)
  }
  return tidied
}