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
    data: {
      'restaurant': {
        'name': data.restaurant.name,
        'address': data.restaurant.address,
        'description': data.restaurant.description,
        'rating': store.rating
      }
    }
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
    data: {
      'restaurant': {
        'name': data.restaurant.name,
        'address': data.restaurant.address,
        'description': data.restaurant.description,
        'rating': store.rating
      }
    }
  })
}

module.exports = {
  index,
  createRestaurant,
  removeRestaurant,
  showRestaurant,
  updateRestaurant
}
