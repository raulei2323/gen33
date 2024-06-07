//?Se importa el modelo de la carpta models
//?Aqui haremos lo que el usuario puede hacer en la aplicaicon
const Koders = require("../models/koders.model")
//?"koderData" sera un objeto con todos los atributos para crear un koder
//?Con await el programa esperara a que se resuelva la promesa
//?La funcion que contiene ese  await tiene que ser asincrona
//?Asi podemos obtener lo que nos regresa la funcion .create con una constante
//?En este caso la const newKoder almacena lo que retornara la funcion .creat
//? con .then y .catch no es posible hacer esto por la forma en la que .then actua ver 02:47:00
async function create(koderData) {
    const newKoder = await Koders.create(koderData)
    return newKoder
}
//? la funcion .find() sin querys obtiene todos los objetos que tenga el la coleccion que el modelo Koders crea.
//?Si quisieramos usa filtro podemos usar los que vimos en clase cuando usamos compass para administrar la db de mongo
async function getAll() {
    const allKoders = await Koders.find()
    return allKoders

}
//?la const koder tendra lo que reorne la funcion findById que busca en la coleccion creada por el modelo Koder
//?Hay que recordar que con los modelos nosotros podemos manipular las colecciones y los documentos de nuestas bases de datos
async function getById(id) {
    const koder = await Koders.findById(id)
    return koder
}

async function deleteById(id) {
    const koderDeleted =  await Koders.findByIdAndDelete(id)
    return koderDeleted
}
//?newKoderData sera la informacion con la queremos actualizar al koder 
async function updateById(id, newKoderData) {
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, { new: true }) 
    return updatedKoder
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}



