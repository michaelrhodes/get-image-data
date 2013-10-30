var shared = require('./shared')

var canvas = null
var supported = (function(document) {
  canvas = document.createElement('canvas')
  return !!(
    canvas.getContext &&
    canvas.getContext('2d')
  )
})(document)

module.exports = function(path, callback) {
  if (!supported) {
    return callback(new Error(
      'Your browser doesn’t the ' +
      '<canvas> element'
    )) 
  }

  var image = new Image 
  if (!/^data/.test(path)) {
    image.crossOrigin = true
  }

  image.src = path
  image.onerror = callback
  image.onload = function() {
    var data = shared(canvas)
    callback(null, {
      data: data(image),
      height: image.height,
      width: image.width
    })
  }
}
