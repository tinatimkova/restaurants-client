'use strict'

const store = require('../store.js')
const restaurantsTemplate = require('../templates/restaurant-listing.handlebars')

const onIndexSuccess = function (response) {
  const indexSuccessHtml = restaurantsTemplate({restaurants: response.restaurants})
  $('.content').html(indexSuccessHtml)
  $('#close').show()
}

const onIndexFailure = function () {
  $('#message').text('Something went wrong!')
}

const onCreateSuccess = function (response) {
  store.restaurant = response.restaurant
  console.log(response)
  $('.content').html('Created!')
}

const onCreateFailure = function (response) {
  console.log(response)
  $('#message').text('Something went wrong!')
}

const closeRestaurants = function () {
  $('.content').empty()
}

const onRemoveFailure = function () {
  $('#message').text('Something went wrong!!!')
}

module.exports = {
  onIndexFailure,
  onIndexSuccess,
  onCreateSuccess,
  onCreateFailure,
  closeRestaurants,
  onRemoveFailure
}
