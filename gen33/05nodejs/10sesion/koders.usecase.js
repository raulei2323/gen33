//?casos de uso, funciones que el usuario necesita,
const db = require("./db") //?importamos el archivo en proyecto db.json

function add(newKoder) {
    if( !newKoder.name) throw new Error("name is required")

    if (!newKoder.generation) throw new Error("generation is required")
    
    newKoder.generation = parseInt(newKoder.generation) //? aqui lo que hace es en la misma constante parsear la generacion y guardarla en el mismo lugar para no tener que crear una nueva variable   
    if (isNaN(newKoder.generation))
        throw new Error("generation must be a number")
    if (newKoder.generation <= 0)
        throw new Error("generation must be greater than zero")

    if (!newKoder.gender) throw new Error("gender is required")
    if (!["f", "m", "nb"].includes(newKoder.gender.toLowerCase())) {
        throw new Error("only m, f and nb values are allowed")
    }

    if (!newKoder.age) throw new Error("age is required")
    newKoder.age = parseInt(newKoder.age) //? se hace parseInt para asegurarnos de que la edad venga en un numero entero
    if(isNaN(newKoder.age)) throw new Eror ("age must be a number")
    if (newKoder.age <= 0) throw new Error("age must be greater then zero")
    
    if (typeof newKoder.isActive !== "boolean") {
        throw new Error ("isActive must be a boolean")
    }
    const dbData = db.read()

    dbData.koders.push(newKoder)

    db.write(dbData)

    return dbData.koders
    }

function deleteAll(){
    const dbData = db.read() //? se obtiene la base de datos

    dbData.koders = [] //? se establece que en esta funcion la base de dtos pero solo la propiedad .koders tendra como valor un arreglo vacio

    db.write(dbData) //? db.write escribe el nuevo valor que dbData.koders tiene 

    return dbData.koders
}

function deleteByName(name) {
    if (!name) throw new Error ("name is required")
    
    const dbData = db.read()

    dbData.koders = dbData.koders.filter((koder) => koder.name !== name)

    db.write(dbData)

    return dbData.koders

}

function getAll() {
    const dbData = db.read()

    return dbData.koders

    //? return db.read().koders  mas corto pero cumple lo mismo que las otras dos liineas de arriba
    //? const getAll () => return db.read().koders asi seria si lo pusieramos en flacha pero como estamos usando funciones completas no deberiamos hacerlo
}



module.exports = {
    add,
    deleteAll,
    deleteByName,
    getAll,
}

