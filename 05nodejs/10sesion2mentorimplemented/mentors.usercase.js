//?son necesarios casi todos las funcionalidades del koders.usecase, con algunas extra, agregare un id para borrar por id al mentor
//? agregare una seccion donde diga si el mentor puede o no ensanar los modulos de backend o frontend con un simple true or false
//? tal vez tambein los anos de experiencia
const db = require("./db")

function add(newMentor) {
    if( !newMentor.name) throw new Error("name is required")

    if (!newMentor.xp) throw new Error("xp is required")
    
    newMentor.xp = parseInt(newMentor.xp) 
    if (isNaN(newMentor.xp))
        throw new Error("xp must be a number")
    if (newMentor.xp <= 0)
        throw new Error("xp must be greater than zero")

    if (!newMentor.gender) throw new Error("gender is required")
    if (!["f", "m", "nb"].includes(newMentor.gender.toLowerCase())) {
        throw new Error("only m, f and nb values are allowed")
    }

    if (!newMentor.age) throw new Error("age is required")
    newMentor.age = parseInt(newMentor.age) //? se hace parseInt para asegurarnos de que la edad venga en un numero entero
    if(isNaN(newMentor.age)) throw new Eror ("age must be a number")
    if (newMentor.age <= 0) throw new Error("age must be greater then zero")
    
    if (typeof newMentor.backendAble !== "boolean") {
        throw new Error ("backendAble must be a boolean")
    }
    if (typeof newMentor.frontendAble !== "boolean") {
        throw new Error ("frontendAble must be a boolean")
    }

    const dbData = db.read()

    dbData.mentors.push(newMentor)

    db.write(dbData)

    return dbData.mentors
    }

function deleteAll(){
    const dbData = db.read() 

    dbData.mentors = [] 

    db.write(dbData) 
    return dbData.mentors
}

function deleteByName(name) {
    if (!name) throw new Error ("name is required")
    
    const dbData = db.read()

    dbData.mentors = dbData.mentors.filter((mentor) => mentor.name !== name)

    db.write(dbData)

    return dbData.mentors

}

function getAll() {
    const dbData = db.read()

    return dbData.mentors
}



module.exports = {
    add,
    deleteAll,
    deleteByName,
    getAll,
}