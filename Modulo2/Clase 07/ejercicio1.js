let movimientos = [500,15000,-4000,200,-3000,-2000,15,-900];

function operarMovimientos(array){
    let depositos =[];
    let retiros=[];
    for(let i; i<=array.length; i++){
        if(array[i]<0){
            retiros.push(array[i]);
        } else{
            depositos.push(array[i]);
        }
    }

}

for(let i; i<=57; i++){
    console.log("numero: "+i);
}