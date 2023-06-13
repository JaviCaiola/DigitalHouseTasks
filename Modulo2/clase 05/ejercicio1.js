let alquilerVeichulo = (tipodevehículo, díasdealquiler, sillaparabebe) =>{
    let tarifaveichulo;
    let valorsilla;

    switch(tipodevehículo){
        case tipodevehículo == "Compacto":{
            tarifaveichulo = 14000;
            break;
        }
        case tipodevehículo == "Mediano":{
            tarifaveichulo = 17000;
            break;
        }
        case tipodevehículo == "Camioneta":{
            tarifaveichulo = 28000;
            break;
        }
    }
    switch (sillaparabebe){
        case sillaparabebe == "si":{
            valorsilla =1200;
            break;
        }
        default:{
            valorsilla =0;
        }
    }
    
    let valorTotal = tarifaveichulo*díasdealquiler + valorsilla*díasdealquiler;

    console.log("Estimado cliente: en base al tipo de vehículo "+ tipodevehículo+" alquilado, considerando los "+díasdealquiler+ " díautilizados, el monto total a pagar es de: "+ valorTotal)

}

alquilerVeichulo("Mediano", 2, "si");