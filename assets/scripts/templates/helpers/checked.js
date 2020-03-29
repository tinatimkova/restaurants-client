'use strict'

const checked = (rating) => {
  let html = ''
  for (let i = 1; i <= 5; i++) {
    const checked = rating >= i ? ' checked' : ''
    html += `<span class='fa fa-star${checked}'></span>`
  }
  return html
}

module.exports = checked
