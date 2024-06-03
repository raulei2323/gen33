const db = require("./db") //?importamos el archivo en proyecto db.json

function add(newKoder) {
    if( !newKoder.firstName) throw new Error("name is required")

    if (!newKoder.generation) throw new Error("generation is required")
    
    newKoder.generation = parseInt(newKoder.generation) //? aqui lo que hace es en la misma constante parsear la generacion y guardarla en el mismo lugar para no tener que crear una nueva variable   
    if (isNaN(newKoder.generation))
        throw new Error("generation must be a number")
    if (newKoder.generation <= 0)
        throw new Error("generation must be greater than zero")

    const dbData = db.read()

    dbData.koders.push(newKoder)

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
        getAll,
    }