var jimp = require('jimp')

module.exports = get
module.exports.data = data

function get (src, cb) {
  jimp.read(src)
    .then(function (img) {
      cb(null, data(img))
    }, cb)
}

function data (img) {
  return {
    data: new Uint8ClampedArray(img.bitmap.data),
    height: img.bitmap.height,
    width: img.bitmap.width
  }
}
