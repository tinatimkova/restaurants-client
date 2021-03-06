'use strict'

const store = require('../store.js')
const restaurantsTemplate = require('../templates/restaurant-listing.handlebars')
const restaurantTemplate = require('../templates/restaurant-showing.handlebars')

const onIndexSuccess = function (response) {
  const indexSuccessHtml = restaurantsTemplate({restaurants: response.restaurants})
  $('.content').html(indexSuccessHtml)
  $('#close').show()
  $('#index, #update, #create').hide()
  $('.rating').find('input[type=radio]').prop('checked', false)
}

const onIndexFailure = function () {
  $('#message').text('Something went wrong!')
}

const onCreateSuccess = function (response) {
  store.restaurant = response.restaurant
  $('#create')[0].reset()
  $('.rating').find('input[type=radio]').prop('checked', false)
  const showSuccessHtml = restaurantTemplate({restaurant: response.restaurant})
  $('.content').html(showSuccessHtml)
  $('#index').show()
}

const onCreateFailure = function (response) {
  $('#message').text('Something went wrong!')
}

const closeRestaurants = function () {
  $('.content').empty()
  $('#update').hide()
  $('#index').show()
  $('#close').hide()
  $('#create').show()
}

const onRemoveFailure = function () {
  $('#message').text('Something went wrong!!!')
}

const onShowSuccess = function (response) {
  const showSuccessHtml = restaurantTemplate({restaurant: response.restaurant})
  store.restaurant = response.restaurant
  $('.content').html(showSuccessHtml)
  $('#create, #update').hide()
  $('#index, #close').show()
}

const onShowFailure = function () {
  $('#message').text('Something went wrong!!!')
}

const onUpdateFailure = function (response) {
  $('#message').text('Something went wrong!')
}

const onUpdateSuccess = function (response) {
  $('#update')[0].reset()
  $('#update').hide()
  $('#index').show()
  $('.rating').find('input[type=radio]').prop('checked', false)
}

module.exports = {
  onIndexFailure,
  onIndexSuccess,
  onCreateSuccess,
  onCreateFailure,
  closeRestaurants,
  onRemoveFailure,
  onShowFailure,
  onShowSuccess,
  onUpdateFailure,
  onUpdateSuccess
}
