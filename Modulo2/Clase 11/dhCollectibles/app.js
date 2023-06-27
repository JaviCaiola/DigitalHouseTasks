let fig = require("./collectibles")

let jugetesCalientes = fig("Hot Toys");
let bandai = fig("Bandai");
let guerraEstrella = fig("Star Wars");

let unifiedCollectibles = [...jugetesCalientes, ...bandai, ...guerraEstrella];

let collectibles = {
    figuras : unifiedCollectibles,
    listfigures : function (){
        this.figuras.forEach(i => console.log(i));
    },
    figuresbyBrand : function(marca){
        let filtro = this.figuras.flat().filter(figura => figura.marca == marca);
        return filtro;
    }
}
//PRUEBA DE LAS FUNCIONES DEL OBJETO COLLECTIBLES
collectibles.listfigures();
console.log(collectibles.figuresbyBrand("Bandai"))