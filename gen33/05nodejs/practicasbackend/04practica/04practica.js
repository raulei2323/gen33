//Crear un programa que imprima los numeros del uno al cien y en cada numero divisible entre 3 imprima "Fizz"
//junto al numero, en cada numeor divisible entre 5 "Buzz" junto al numero y "FizzBuzz"si es divisible entre ambos

//Misma practica que la practica 3 ahora usando process.argv


//!Tambien se puede  crear una const para almacenar el valor que se ingrese desde process.argv

if(isNaN(parseInt(process.argv[2]))) {
    console.log("Valor invalido, debes ingresar un numero")
    process.exit(1)
}

for (let i = 1 ; i <= parseInt(process.argv[2]); i++) {
    if(i % 3 !==0 && i % 5 !== 0) console.log(i)
    if(i % 3 ==0 && i % 5 == 0) console.log(i + "FizzBuzz")
    if (i % 3 ==0) console.log(i + "Fizz")
    if (i % 5 ==0) console.log(i + "Buzz")
    }


