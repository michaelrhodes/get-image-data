var fs = require('fs')
var Canvas = require('canvas')
var shared = require('./shared')

module.exports = function(input, callback) { 
  if (Buffer.isBuffer(input)) {
    load(null, input)
  } else {
    fs.readFile(input, load)
  }

  function load(error, buffer) {
    if (error) {
      callback(error)
      return
    }

    var image = new Canvas.Image
    image.src = buffer

    var canvas = new Canvas(
      image.width, image.height
    )

    callback(null, shared(canvas)(image))
  } 
}
