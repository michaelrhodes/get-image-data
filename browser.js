var canvas = document.createElement('canvas')

module.exports = get

function get (src, cb) {
  var img = new Image
  if (!/^data/.test(src))
    img.crossOrigin = ''

  img.src = src
  img.onerror = cb
  img.onload = function () {
    data(img, cb)
  }
}

function data (img, cb) {
  var ctx = canvas.getContext('2d')
  canvas.width = img.width
  canvas.height = img.height
  ctx.drawImage(img, 0, 0)
  cb(null, ctx.getImageData(
    0, 0, img.width, img.height
  ))
}
