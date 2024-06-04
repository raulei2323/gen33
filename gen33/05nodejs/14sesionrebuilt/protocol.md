API 

Se comienza el proyecto en una carpeta nueva con el nombre del proyecto.
Se instala node con el comando npm init y las diferentes dependencias":
Se puede instalar varias dependencias a la vez de las siguiente forma:
npm i express mongoose dotenv

Una vez instaladas las dependencias en la carpeta raiz del proyecto comenzamos con el diseño de la estructura limpia, este proyecto hara uso de dicha estructura.

En la raiz del proyecto estara la carpeta <src> y los archivo index.js y .env (podemos tambien hacer un archivo git ignore en la raiz del proyecto si no tenemos configurado un gitignore global.)
Dentro de la carpeta <src> estaran las carpetas <lib>, <models>, <routes>, <usecases> y el archivo server.js 
Dentro de <lib> crearemos el archivo db.js

<!--?    ARCHIVO db.js -->
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

<!--?    ARCHIVO server.js -->
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

<!-- ?    ARCHIVO index.js -->
