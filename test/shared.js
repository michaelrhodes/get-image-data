var run = require('tape').test
var expected = require('./expected')

module.exports = function(image, path) {
  run('it works', function(test) {
    test.plan(3)
    image(path.trad, function(error, data) {
      test.equal(
        data.length, expected.trad,
        'trad.jpg'
      )
    })
    image(path.jerry, function(error, data) {
      test.equal(
        data.length, expected.jerry,
        'jerry.jpg'
      )
    })
    image(path.astronaut, function(error, data) {
      test.equal(
        data.length, expected.astronaut,
        'astronaut.jpg'
      )
    })
  })
}
