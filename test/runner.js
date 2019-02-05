var expected = require('./expected')

module.exports = runner

function runner (get, path) {
  get(path.trad, function (err, info) {
    console.assert(err === null)
    console.assert(typeof info === 'object')
    console.assert(typeof info.data === 'object')
    var type = info.data.constructor.toString()
    console.assert(/Uint8ClampedArray/.test(type))
    trad()
  })

  function trad () {
    get(path.trad, function (err, info) {
      console.assert(err === null)
      console.assert(typeof info === 'object')
      console.assert(typeof info.data === 'object')
      console.assert(info.data.length === expected.trad.length)
      console.assert(info.width === expected.trad.width)
      console.assert(info.height === expected.trad.height)
      jerry()
    })
  }

  function jerry () {
    get(path.jerry, function (err, info) {
      console.assert(err === null)
      console.assert(typeof info === 'object')
      console.assert(typeof info.data === 'object')
      console.assert(info.data.length === expected.jerry.length)
      console.assert(info.width === expected.jerry.width)
      console.assert(info.height === expected.jerry.height)
      astronaut()
    })
  }

  function astronaut () {
    get(path.astronaut, function (err, info) {
      console.assert(err === null)
      console.assert(typeof info === 'object')
      console.assert(typeof info.data === 'object')
      console.assert(info.data.length === expected.astronaut.length)
      console.assert(info.width === expected.astronaut.width)
      console.assert(info.height === expected.astronaut.height)
    })
  }
}
