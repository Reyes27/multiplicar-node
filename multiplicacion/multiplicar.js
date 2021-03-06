const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite) => {
    let data = '';
    console.log('============================='.green);
    console.log(`=========TLABLA DE ${base}=========`.green);
    console.log('============================='.green);

    for (i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`.red;
    }

    console.log(data);
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido, no es un numero`);
            return;
        }

        let data = '';

        for (i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }

        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}