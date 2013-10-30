var fs = require('fs')
var Canvas = require('canvas')
var shared = require('./shared')

module.exports = function(path, callback) { 
  fs.readFile(path, function(error, file) {
    if (error) {
      callback(error)
      return
    }

    var image = new Canvas.Image
    image.src = file

    var canvas = new Canvas(
      image.width, image.height
    )

    var data = shared(canvas)
    callback(null, {
      data: data(image),
      height: image.height,
      width: image.width
    })
  })  
}
