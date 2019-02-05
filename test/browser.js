var fs = require('fs')
var get = require('../browser')

require('./runner')(get, {
  trad: fs.readFileSync(__dirname + '/images/trad.txt'),
  jerry: fs.readFileSync(__dirname + '/images/jerry.txt'),
  astronaut: fs.readFileSync(__dirname + '/images/astronaut.txt')
})
