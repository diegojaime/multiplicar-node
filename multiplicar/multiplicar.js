const fs = require('fs')
const colors = require('colors')


let listarTabla = (base, limite = 10) => {

    console.log('============================================================='.green)
    console.log(`========= Tabla del ${base} con limite ${limite} ============`.green)
    console.log('============================================================='.green)
        //return new Promise((resolve, reject) => {
    if (!Number(base)) {
        return (`El valor ${base} no es un número`)

    } else if (!Number(limite)) {
        return (`El valor ${limite} no es un número`)
    }

    for (let i = 1; i < limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
    //})
}

let crearArchivo = (base, limite = 10) => {

    //Lo definimos como modulo.export... para que se exporte y se pueda utilziar por otros archivos .js
    // module.exports.crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
            return
        } else if (!Number(limite)) {
            reject(`El valor ${limite} no es un numero`)
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}_al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}_al-${limite}.txt`);
        })
    })
}

//Podemos exportar funciones y variables así
module.exports = {
    crearArchivo,
    listarTabla
}