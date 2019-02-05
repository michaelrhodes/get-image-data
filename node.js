var jimp = require('jimp')

module.exports = get

function get (src, cb) {
  jimp.read(src)
    .then(function (img) {
      cb(null, {
        data: new Uint8ClampedArray(img.bitmap.data),
        height: img.bitmap.height,
        width: img.bitmap.width
      })
    }, cb)
}
