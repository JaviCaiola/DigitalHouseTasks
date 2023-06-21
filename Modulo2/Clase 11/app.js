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
console.log("----------------------------- \n Destructuring con una lista");

let frutas = ["Manzana", "Pera", "Uvas", "Banana","Naranja"];

let [Manzana, Naranja] = frutas;

console.log(Manzana);
console.log(Naranja);

