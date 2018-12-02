//const multiplicar = require('./multiplicar/multiplicar')
// Destructuración, hacemos que crear archivo se pueda llamar de forma directa, de otro modo sería multiplicar.crearArchivo(...)
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors')

console.log(argv)

let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base, argv.limite)
        break

    case 'crear':
        console.log('Crear')
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err))
        break

    case 'borrar':
        console.log('borrar')
        break

    default:
        console.log('Comando no reconocido')
}

let parametro = process.argv
console.log('Base: ', argv.base)
console.log('Limite', argv.limite)


//console.log(argv)
//console.log(parametro)
//let base = parametro.split('=')[1]
//console.log(base)