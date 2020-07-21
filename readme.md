# get-image-data
isomorphic image data extraction

[![ci](https://travis-ci.org/michaelrhodes/get-image-data.svg?branch=master)](https://travis-ci.org/michaelrhodes/get-image-data)

## install
``` sh
npm install michaelrhodes/get-image-data#5.0.0 [jimp] [sharp]
```

## use
``` js
// Extract data with canvas element or `jimp`
var image = require('get-image-data')

image('./image.jpg', function (err, info) {
  var data = info.data
  var height = info.height
  var width = info.width

  for (var i = 0, l = data.length; i < l; i += 4) {
    var red = data[i]
    var green = data[i + 1]
    var blue = data[i + 2]
    var alpha = data[i + 3]
  }
})

// Extract data with `sharp` (faster)
var image = require('get-image-data/native')
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
