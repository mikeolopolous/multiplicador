const fs = require('node:fs')
require('colors')

const crearArchivo = async( base, listar, hasta ) => {
  try {
    let salida = ''
    for (let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`
    }

    if (listar){
      console.log('==================='.cyan)
      console.log(`    Tabla del ${base}`.magenta)
      console.log('==================='.cyan)

      console.log(salida)
    }
  
    fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida)

    return `Tabla del ${base}.txt`
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo
}