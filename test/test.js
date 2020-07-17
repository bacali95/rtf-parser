const rtfToHTML = require('../lib/index')
const fs = require('fs')

rtfToHTML.parseString('{\\rtf1\\ansi\\b hi there\\b0}', (err, doc) => {
  console.assert(err === null)
  console.log(doc)
})

const parser = rtfToHTML.parse((err, doc) => {
  console.assert(err === null)
  console.log(doc)
})

fs.createReadStream('test/example.rtf').pipe(parser)