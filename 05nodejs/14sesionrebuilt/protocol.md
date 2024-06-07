API     30 05 2024

Se comienza el proyecto en una carpeta nueva con el nombre del proyecto.
Se instala node con el comando npm init y las diferentes dependencias":
Se puede instalar varias dependencias a la vez de las siguiente forma:
npm i express mongoose dotenv....etc

Una vez instaladas las dependencias en la carpeta raiz del proyecto comenzamos con el diseño de la estructura limpia, este proyecto hara uso de dicha estructura.

En la raiz del proyecto estara la carpeta <src> y los archivo index.js y .env (podemos tambien hacer un archivo git ignore en la raiz del proyecto si no tenemos configurado un gitignore global.)
Dentro de la carpeta <src> estaran las carpetas <lib>, <models>, <routes>, <usecases> y el archivo server.js 
Dentro de <lib> crearemos el archivo db.js

<!--?    ARCHIVO db.js -->00:57:00
Importamos mongoose 
En este archivo crearemos la conexion a la base de datos
Importamos mongoose //const mongoose = require('mongoose') //
Sacamos(deestructuramos) las varialbles de entorno del obejto process.env
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env 

Creamos la URL de conexion usando template strings
const URI =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

Creamos la funcion connect. La funcion connect genera la promesa de conexion.
function connect () {
    return mongoose.connect(URI)
}
La funcion mongoose.connect retorna la promesa que regresa la funcion connect ya que la usaremos
en el archivo index.js (index.js se encarga de levantar la aplicacion)

Se exporta o se pone como exportable la funcion 
module.export = { connect }

<!--* Este archivo se encarga de tener la logica para la conexcion y de crear la URI de conexion si queremos conectarnos a otra base de datos es en este archivo el que deberiamos modificar para poder hace la conexion exitosamenten=. ver 1:04 20 05 2024

<!--?    ARCHIVO server.js -->01:05:00
Se crea un servidor primero importando express luego en una const aparte se llama la funcion
la podemos llamar server pero se ve mucho con el nombre app
const express = require('express')
const app = express()

Nuestro servidor tendra que procesar jsons asi qeu le pasamos la middleware de json
Esto le hace posible a nuestro server(app) recibir peticiones post que tengan como body archivoo
.json y procesarlos def.:  https://kinsta.com/es/base-de-conocimiento/que-es-express/#:~:text=Los%20middlewares%20son%20c%C3%B3digos%20que,la%20petici%C3%B3n%20de%20un%20cliente.
app.use(express.json())

Se crea un endpoint para responder que el servidor esta funcionando
app.get("/", (require, response) => {
    response.json({
        message: "Koders APIv1"
    })
})
Se exporta la funcion app
module.exports = app

<!-- ?    ARCHIVO index.js -->01:09:00
index.js tendra la obligacion de conectarse a la base de datos y de poner a eschucar al servidor
Se importan las configuraciones de las variables en ambient o .env 
require("dotenv").config()
Se importa el servidor que creamos en el archivo server.js
const server = require("./src/server")
//? se importa el archvo db de la libreria(lib)
const db = require("./src/lib/db")
Si en process.env no viene el PORT en que se levantara el servidor entonces se conctara en 
la otra opcion
const PORT = process.env.PORT || 8080
Primero debemos conectarnos a nuestra base de datos antes de levantar el servidor.
db.connect()
Hacemos un then catch
.then(() => {
    console.log("DB connected")
    server.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
    
})
.catch((error) => {
    console.error("DB connection error:", error)
})

<!-- ?    ARCHIVO .env -->01:19:00
El archivo .env tiene nuestras variables de entorno. Necesarias para la conexion con la base de datos.
Se usa SCREAM CASE y no se debe subir al repositorio de git hub(versinar) ni compartir.
EL formato es sin espacios.


<!-- *    Conectar -->1:23
Si seguimos los pasos hasta aqu de manera lineal, podriamos revisar la conexio
Correr el comando npm run dev
La connfiguracion de package.json debe tener el scrip "start": "node index.js", "dev": "node --watch index.js"
El archivo index es una variable, depende de como nombremos el archivo, podria encontrarse con el nombre app

<!-- *--------------------------------------------------------------------------------------------------------- -->

<!-- ?    koders.model.js --> 29 05 2024 00:53:00 y 30 05 2024 02:15:00
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

<!-- *    koders.usecase.js --> 02:35:000
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


