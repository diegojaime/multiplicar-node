//const multiplicar = require('./multiplicar/multiplicar')
// Destructuración, hacemos que crear archivo se pueda llamar de forma directa, de otro modo sería multiplicar.crearArchivo(...)
const { crearArchivo } = require('./multiplicar/multiplicar')
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv

//let base = 3

//console.log(process.argv)
let parametro = process.argv
console.log('Base: ', argv.base)
console.log('Limite', argv.limite)
    //console.log(argv)
    //console.log(parametro)
    //let base = parametro.split('=')[1]
    //console.log(base)

//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(err => console.log(err))