let fig = require("./collectibles")

let jugetesCalientes = fig("Hot Toys");
let bandai = fig("Bandai");
let guerraEstrella = fig("Star Wars");

let unifiedCollectibles = [...jugetesCalientes, ...bandai, ...guerraEstrella];

console.log(unifiedCollectibles);

let collectibles = {
    figuras : unifiedCollectibles,
    listfigures : function (){
        this.figuras.forEach(i => console.log(i));
    },
    figuresbyBrand : function(marca){
        console.log(this.figuras.length);
        /*for (let i=0;i<= this.figuras.length; i++){
            this.figuras[i].filter(figura => figura.marca == marca);
        }*/
        //console.log(this.figuras[1.filter(figura => figura.marca == marca))


    }

}

//console.log(collectibles.figuresbyBrand("Bandai"));