const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const addHandlers = function () {
  $('#index').on('submit', onIndex)
  $('#create').on('submit', onCreateRestaurant)
  // $('.content').on('click', '.show', onShow)
  $('#close').on('submit', onClose)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onClose = function (event) {
  event.preventDefault()
  ui.closeRestaurants()
}

const onCreateRestaurant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createRestaurant(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

module.exports = {
  addHandlers
}
