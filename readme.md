# get-image-data
isomorphic image data extraction

[![build status](https://travis-ci.org/michaelrhodes/get-image-data.svg?branch=master)](https://travis-ci.org/michaelrhodes/get-image-data)

## install
``` sh
npm install michaelrhodes/get-image-data#4.1.1 [sharp]
```

## use
``` js
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

// Extract data faster with `sharp`
var image = require('get-image-data/native')
```

## obey
Copyright 2013–2019 Michael Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
