//?*Crear un script que reciba un string y lo imprima invertido


const word = process.argv[2]
function reverser1() {

    const wordToArray = word.split("")
    const reversedArr = wordToArray.reverse()
    const finalWord = reversedArr.join("")

    console.log(finalWord)

}

reverser1(word)


//Alter



function reverser2() {
    return word.split("").reverse().join("")
}
console.log(reverser2(word))
