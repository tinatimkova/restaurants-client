const config = require('../config.js')
const store = require('../store.js')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createRestaurant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const removeRestaurant = function (id) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showRestaurant = function (id) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRestaurant = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  index,
  createRestaurant,
  removeRestaurant,
  showRestaurant,
  updateRestaurant
}
