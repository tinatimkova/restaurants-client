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
  $('#sign-up, #sign-in, #nav-signup, #nav-signin').hide()
  $('#sign-out, #change-password, #nav-changePW, #nav-home, #home-tab').show()
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
  setTimeout(function () {
    $('#message').html('')
  }, 1000)
  updateApp()
}

const onSignOutFailure = function () {
  $('#message').html('Something went wrong!')
  reset('#sign-out')
}

const updateApp = function () {
  $('#sign-out, #nav-changePW, #nav-home, #change-password').hide()
  $('#close').hide()
  $('#update').hide()
  $('#index').hide()
  $('#create').hide()
  $('#sign-up, #sign-in, #nav-signup, #nav-signin').show()
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
