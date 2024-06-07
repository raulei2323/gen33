require('dotenv').config()
const mongoose = require("mongoose")

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

//?modelo
const Koder = mongoose.model("koder", new mongoose.Schema({
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
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    birthDate: {
        type: Date,
        required: false,
    },
    generation: {
        type: Number,
        min: 1,
        max: 100,
    },
}))

//? mongo+srv protocolo://usuario:password@host/db



mongoose.connect(MONGO_URI).then(() => {
        console.log("Conexion exitosa")

        Koder.create({
            firstName: "Charles",
            lastname: "Silva",
            email: "charles@kodemia.mx",
            birthDate: new Date("1995-11-11"),
            generation: 33,
        })
        .then(() => console.log("Koder created"))
        .catch((error) => console.log("Error a crear el Koder", error))
        })
        .catch((error) => {
        console.log("Error al conectar con la base de datos", error)


    })
    console.log("hola mundo")