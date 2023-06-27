let fs = require('fs');

const importarDatos = (marca) =>{
    let figuras = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras1.json","utf-8"));
    let figuras2 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras2.json","utf-8"));
    let figuras3 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras3.json","utf-8"));

    let all = [...figuras,...figuras2,...figuras3];

    let filtro = all.filter(figura => figura.marca == marca);

    return filtro;
    
}

module.exports = importarDatos;