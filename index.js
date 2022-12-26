const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log(`${nombreArchivo} creado`.magenta) )
  .catch( error => console.log(error) )
