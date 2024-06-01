//?*Crear un script que reciba un string y lo imprima invertido


function reverser1() {
    const word = process.argv[2]

    const wordToArray = word.split("")
    const reversedArr = wordToArray.reverse()
    const finalWord = reversedArr.join("")

    console.log(finalWord)

}

reverser1()

