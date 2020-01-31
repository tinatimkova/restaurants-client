
const onIndexSuccess = function (response) {
  console.log(response)
  $('#index').text('Created!')
}

const onIndexFailure = function () {
  $('#index').text('Something went wrong!')
}

const onShowSuccess = function () {
  $('#show').html()
}

const onShowFailure = function () {
  $('#show').html('Something went wrong!')
}

module.exports = {
  onIndexFailure,
  onIndexSuccess,
  onShowSuccess,
  onShowFailure
}
