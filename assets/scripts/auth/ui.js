const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').html('Signed Up!')
}

const onSignUpFailure = function () {
  $('#message').html('Something went wrong!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').html('Signed In!')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#index').show()
  $('#create').show()
}

const onSignInFailure = function () {
  $('#message').html('Something went wrong!')
}

const onChangePwSuccess = function (response) {
  $('#message').html('Password changed!')
}

const onChangePwFailure = function () {
  $('#message').html('Something went wrong!')
}

const onSignOutSuccess = function () {
  $('#message').html('Signed Out!')
}

const onSignOutFailure = function () {
  $('#message').html('Something went wrong!')
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
