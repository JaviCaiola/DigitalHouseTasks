let datos = require('./datosbici');

//console.log(datos);

let Objbici = {
    bicicletas : datos,
    buscarid : function (id){
        let filtro = this.bicicletas.filter(function (bici){
            return bici.id === id;
        });
        return filtro;
    }
}

console.log(Objbici.buscarid(2));

/*
let elemento = this.bicicletas.id;
        elemento.filter(i => i == id);
        return elemento;*/
