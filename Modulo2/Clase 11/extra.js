let numeros = []
for (let i =0; i<=9;i++){
    numeros.push(Math.floor(Math.random() * 100));
}

let [num0, ,num2, ,num4,...otros]  = numeros;

let deportados = [numeros[1], numeros[3],...otros];

console.log("todos los numeros: "+numeros+"\n");
console.log("posicion 0: "+num0+"\n");
console.log("posicion 2: "+num2+"\n");
console.log("posicion 4: "+num4+"\n");
console.log("\n numeros que fueron exiliados:\n"+deportados);

//PARTE DOS DEL DESAFIO EXTRA
let mascota = {
    nombre : "Pichichus",
    tipo : "Pejelagarto",
    raza : "Piromano",
    color : "Gris"
}
let {nombre,tipo,raza,color} = mascota;

let mensaje = "les presento a mi mascota, su nombre es: "+nombre+" es un " +tipo+ " hermoso, de color: " +color+" y su raza es: " + raza;

console.log(mensaje);