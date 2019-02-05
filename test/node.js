var fs = require('fs')
var get = require('../node')

fs.readFile(__dirname + '/images/astronaut.jpg', function (err, buf) {
  require('./runner')(get, {
    trad: __dirname + '/images/trad.jpg',
    jerry: __dirname + '/images/jerry.jpg',
    astronaut: buf
  })
})
