'use strict'
const auth = require('./auth/events.js')
const events = require('./restaurants/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  auth.addHandlers()
  events.addHandlers()
  $('#nav-changePW, #change-password, #sign-out').hide()
  $('#nav-home, #home-tab').hide()
  $('#update, #close').hide()
})
