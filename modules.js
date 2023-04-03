const names = require('./names')
const sayHi = require('./utils')

console.log(names.john)

sayHi(names.john);
sayHi(names.peter)

const data = require('./alternative_syntax')
console.log(data)

require('./mind-grenade')