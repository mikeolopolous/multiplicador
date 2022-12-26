const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Base o multiplicando'
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      demandOption: false,
      describe: 'Muestra la tabla en consola'
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      demandOption: false,
      describe: 'Define el límite del multiplicador'
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)){
      throw 'La base tiene que ser un número'
    }
    return true
  })
  .argv

  module.exports = argv