let fig = require("./collectibles")

let jugetesCalientes = fig("Hot Toys");
let bandai = fig("Bandai");
let guerraEstrella = fig("Star Wars");

let unifiedCollectibles = [...jugetesCalientes, ...bandai, ...guerraEstrella];

//console.log(unifiedCollectibles);

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

console.log(collectibles.figuresbyBrand("Bandai"))