const fs = require("node:fs")

const fileName = "db.json" //? este sera nuestra base de datos en fs, se crea como archivo de nuestro proyecto por que abajo writefilesync lo crea
const defaultData = { //?controla que tendra el objero fileName por defecto
    koders: [],
    mentors: [],
}

function init() {
    if(!fs.existsSync(fileName)) { //?esta funcion verifica si el archivo db.json existe, 
        fs.writeFileSync(fileName, JSON.stringify(defaultData)) //?en caso de que no exista lo crea con el default data que fue establecido arriba 
    }
}

function read() {
    const dbAsString = fs.readFileSync(fileName, "utf-8") //?en esta constante se guarda el db.json, que esta en la const fileName
    return JSON.parse(dbAsString) //? aqui esto se pone para que la funcion read nos retornara el db.json como una string  
}

function write(dataToWrite) { //? parametro que usaremos para que la funcion write obtenda los datos que escribira
    fs.writeFileSync(fileName, JSON.stringify(dataToWrite)) 
}

module.exports = {
    // init: init   // forma verbose de exportgar en este caso la funcion init, como nombraremos el exportador init igual que la funcion que exportara se puede poner de la sig forma:
    init, //?shorhand
    read,
    write,
}
