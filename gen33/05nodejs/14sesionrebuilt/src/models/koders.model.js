//?EL modelo representa la forma de un documento en la base de datos 
//? El modelo representa una coleccion de documentos
//?Por convencion los modelos se llaman en una constante iniciando con una mayuscula
//?mongoose.model es una funcion "koder" es el nombre con el que la funcion creara una coleccion
//?regex del correo se puede obtener de l apg ihateregx.io
//?A traves del modelo podemos acceder a la base de datos, para poder crear nuevos documentos
const mongoose = require('mongoose')
const modelName = "koders"

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    // generation: {
    //     type: Number,
    //     min: 1,
    //     max: 100,
    // },
    cratedAt: {
        type: Date,
        default: Date.now,
    },
})

// const model = mongoose.model(modelName, schema)
// module.exports = model
//?con es forma nos ahorramos un linea de cogigo ya que estamos exportnaod ya model con modelName y schema(estan en los parametros que recibe)
module.exports = mongoose.model(modelName, schema)









//?from 29 05 2024 00:53:00
// const Koder = mongoose.model("koder", new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         minLength: 2,
//         maxLength: 100,
//     },
//     lastName: {
//         type: String,
//         required: false,
//         maxLength: 100,
//     },
//     email: {
//         type: String,
//         required: true,
//         match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
//     },
//     birthDate: {
//         type: Date,
//         required: false,
//     },
//     generation: {
//         type: Number,
//         min: 1,
//         max: 100,
//     }
// }))