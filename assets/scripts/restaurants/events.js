const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const getFormFields = require('./../../../lib/get-form-fields')

const addHandlers = function () {
  $('#index').on('submit', onIndex)
  $('#create').on('submit', onCreateRestaurant)
  $('.content').on('click', '.remove', onRemoveRestaurant)
  $('#close').on('submit', onClose)
  $('.content').on('click', '.show', onShowRestaurant)
  $('.content').on('click', '.edit', onEditRestaurant)
  $('#update').on('submit', onUpdateRestaurant)
  $('label').on('click', onClickStar)
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

const onRemoveRestaurant = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.removeRestaurant(id)
    .then(() => onIndex(event))
    .catch(ui.onRemoveFailure)
}

const onShowRestaurant = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.showRestaurant(id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onEditRestaurant = function (event) {
  event.preventDefault()
  store.id = $(event.target).data('id')
  $('#name').val(store.restaurant.name)
  $('#address').val(store.restaurant.address)
  $('#description').val(store.restaurant.description)
  $('#update').show()
  $('#create').hide()
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateRestaurant(data)
    .then(ui.onUpdateSuccess)
    .then(() => onIndex(event))
    .catch(ui.onUpdateFailure)
}

const onClickStar = function (event) {
  event.preventDefault()
  const labelID = $(this).attr('for')
  const star = $('.' + labelID).trigger('click')
  store.rating = $(star).data('id')
}

module.exports = {
  addHandlers
}
