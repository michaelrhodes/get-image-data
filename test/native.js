var fs = require('fs')
var get = require('../native')

fs.readFile(__dirname + '/images/astronaut.jpg', function (err, buf) {
  require('./runner')(get, {
    trad: __dirname + '/images/trad.jpg',
    jerry: __dirname + '/images/jerry.jpg',
    astronaut: buf
  })
})
