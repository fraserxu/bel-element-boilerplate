var boilerplate = require('../index.js')
var bel = require('bel')

function render () {
  return bel`${boilerplate()}`
}

var app = render()
document.body.appendChild(app)
