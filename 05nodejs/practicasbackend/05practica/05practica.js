//Crear un programa que le pida al usuario ingresar una lista de nombres, el numero de nombres permitido es indeterminado

//Una vex el usuario no desee ingresar mas nombres, el programa le da al usuario la siguiente informacion:

//-Cuantos nombres se ingresaron
//-Si esxiste al menos un valor repetido o no
//- Cual es el nombre mas largo e todos los ingresados
//-Cual es el nombre mas corto de todos los ingresados

const prompt = require("prompt-sync")()

let names = prompt("Ingresa un nombre o ingresa 'STOP' para terminar ")

while(names !== "STOP") {
    console.log(names)
    names += names + names
    names ++

    if(names == "STOP"){
        console.log(names)
        proces.exti()
    }
}

//!No terminado.....crea un loop INFINITO, PRECAUCION!!!!!!!!!!!!!!