var canvas = document.createElement('canvas')

module.exports = get
module.exports.data = data

function get (src, cb) {
  var img = new Image
  if (!/^data/.test(src))
    img.crossOrigin = ''

  img.src = src
  img.onerror = cb
  img.onload = function () {
    cb(null, data(img))
  }
}

function data (img) {
  var ctx = canvas.getContext('2d')
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage(img, 0, 0)
  return ctx.getImageData(
    0, 0, img.width, img.height
  )
}
