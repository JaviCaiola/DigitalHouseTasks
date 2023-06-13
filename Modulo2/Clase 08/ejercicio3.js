const encontrarNumero = (array, num) =>{
    for(let i =0;i<=array.length;i++){
        if (num === i){
            return "El número "+num+" sí existe en el array";
        } 
    }
    return "El valor solicitado no existe";
}
let numeros = [23,3,21,6,75,12,55];

console.log(encontrarNumero(numeros, 89))

let arregloTrompo = ["Toma 1","Toma 2","Pon 1", "Pon 2", "Todos ponen", "Toma todo"];

const juegoDeTrompito = (array, vueltas) =>{
    let numAle = Math.floor(Math.random() * 5);
}
