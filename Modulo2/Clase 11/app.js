console.log("\n ---DESTRUCTURING--- \n");
//Destructuring con un objeto
let persona = {
    nombre : "jack",
    edad : 20,
    peso : 50,
    color : "gris"
}

let {nombre, color} = persona;

console.log(nombre);
console.log(color);

//Destructuring con una lista
console.log("------------------------ \n Destructuring con una lista");

let frutas = ["Manzana", "Pera", "Uvas", "Banana","Naranja"];

let [Manzana, Naranja] = frutas;

console.log(Manzana);
console.log(Naranja);

console.log("\n ---SPREAD OPERATOR--- \n");

let carros = ["Ford", "Chevi", "Mercedes", "Honda","Toyota"];
let motos = ["husqvarna", "motomel", "Ducati", "BMW"];
let veichulos = [...carros,...motos]
console.log(veichulos);

console.log("------------------------ \n Spread con un objeto");

let cuentaCorriente = {
    saldo : 10,
    deuda : 3000000,
    alias : "mvc crk"
}

let pablo = {
    nombre : "Pablo",
    dni : 6023493,
    ...cuentaCorriente
}

let julian = {
    nombre : "Julian",
    dni : 6023492,
    ...cuentaCorriente
}

console.log(pablo);

