let gradHTML5 = '30 45 25 34 18 23 16 50 72 70';
let gradCSS3 = '50 45 71 34 23 45 65 75 63 43 74 70';
let gradJAVASCRIPT = '70 65 58 45 23 57 34 17 72';
let gradNODEJS = '45 56 73 34 65 72 70 32';

let arrayHTML5 = gradHTML5.split(" ").map(a => parseInt(a));
let arrayCSS3 = gradCSS3.split(" ").map(a => parseInt(a));
let arrayJAVASCRIPT = gradJAVASCRIPT.split(" ").map(a => parseInt(a));
let arrayNODEJS = gradNODEJS.split(" ").map(a => parseInt(a));
let allGrad = [];
allGrad.push([arrayHTML5,1], [arrayCSS3,2], [arrayJAVASCRIPT,3], [arrayNODEJS,4]);


function calcularPromedio(array){
    
}
const promedioGraduados = (arr, arr2, arr3, arr4, num) => {
    let nombreCurso = "";
    switch(num){
        case 1:{
            nombreCurso = "HTML5";
             
        }
    }
}
