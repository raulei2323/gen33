//Crear un script que reciba un numero e imprima "par" si el numero es par o "impar" si es impar.
//Notificar error si lo ingresado no es un numero

const num = process.argv[2]

function pairChecker (){
    numToInt = parseInt(num)

    if(isNaN(numToInt)){
        console.log("No ingresaste un numero")
        return
    }

    if (numToInt % 2 == 0) console.log("Par")
    else console.log("Impar")

}

pairChecker(num)
