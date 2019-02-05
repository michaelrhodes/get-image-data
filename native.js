var sharp = require('sharp')

module.exports = get

function get (src, cb) {
  sharp(src)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true })
    .then(function (img) {
      cb(null, {
        data: new Uint8ClampedArray(img.data),
        height: img.info.height,
        width: img.info.width
      })
    }, cb)
}
