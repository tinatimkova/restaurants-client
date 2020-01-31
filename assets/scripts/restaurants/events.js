const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = function () {
  $('#index').on('submit', onIndex)
  $('#show').on('submit', onShow)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShow = function (event) {
  event.preventDefault()
  api.show()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

module.exports = {
  addHandlers
}
