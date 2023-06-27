let numeros = []
for (let i =0; i<=9;i++){
    numeros.push(Math.floor(Math.random() * 100));
}

let [num0, ,num2, ,num4]  = numeros;



console.log(num0);

//PARTE DOS DEL DESAFIO EXTRA
let mascota = {
    nombre : "Pichichus",
    tipo : "Pejelagarto",
    raza : "Piromano",
    color : "Gris"
}
let {nombre,tipo,raza,color} = mascota;

let mensaje = "les presento a mi mascota, su nombre es: "+nombre+" es un " +tipo+ " hermoso, de color: " +color+" y su raza es: " + raza;

//console.log(mensaje);