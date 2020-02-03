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
