let fs = require('fs');

const importarDatos = () => {
    let datos = fs.readFileSync(__dirname +"/ejercicio1.js","Utf-8");
    let bicis = JSON.parse(datos);
    return bicis;
}

//let datos = importarDatos();

module.exports = importarDatos();