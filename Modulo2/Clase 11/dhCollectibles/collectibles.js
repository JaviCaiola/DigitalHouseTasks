let fs = require('fs');

const importdeDatos = (marca) =>{
    let figuras = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras1.json","utf-8"));
    let figuras2 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras2.json","utf-8"));
    let figuras3 = JSON.parse(fs.readFileSync(__dirname+"/datos/figuras3.json","utf-8"));

    //console.log(figuras[0].marca)
    let resultado = [];
    switch (marca){
        case figuras[0].marca :
            resultado = figuras;
            break;
        case figuras2[0].marca :
            resultado = figuras2;
            break;
        case figuras3[0].marca :
            resultado = figuras3;
            break;
        default:
            console.log("La marca Solicitada no fue encontrada");
            break;
    }
}


console.log(importdeDatos("Hot Toys"));
//module.exports = importdeDatos();
