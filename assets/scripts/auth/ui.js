const store = require('../store')

const reset = function (action) {
  setTimeout(function () {
    $('#message').html('')
  }, 1000)
  $(action)[0].reset()
}

const onSignUpSuccess = function () {
  $('#message').html('Signed Up!')
  reset('#sign-up')
}

const onSignUpFailure = function () {
  $('#message').html('Something went wrong!')
  reset('#sign-up')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').html('Signed In!')
  reset('#sign-in')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#index').show()
  $('#create').show()
}

const onSignInFailure = function () {
  $('#message').html('Something went wrong!')
  reset('#sign-in')
}

const onChangePwSuccess = function (response) {
  $('#message-pw').html('Password changed!')
  setTimeout(function () {
    $('#message-pw').html('')
  }, 1000)
  $('#change-password')[0].reset()
}

const onChangePwFailure = function () {
  $('#message-pw').html('Something went wrong!')
  setTimeout(function () {
    $('#message-pw').html('')
  }, 1000)
  $('#change-password')[0].reset()
}

const onSignOutSuccess = function () {
  $('#message').html('Signed Out!')
  reset('#sign-out')
  updateApp()
}

const onSignOutFailure = function () {
  $('#message').html('Something went wrong!')
  reset('#sign-out')
}

const updateApp = function () {
  $('#sign-out').hide()
  $('#close').hide()
  $('#update').hide()
  $('#index').hide()
  $('#create').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.content').empty()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}
