//? index.js tendra la obligacion de conectarse a la base de datos y de poner a eschucar al servidor
//? Se importan las configuraciones de las variables en ambient o .env 
require("dotenv").config
//? Se importa el servidor que creamos en el archivo server.js
const server = require("./src/server")
//? Primero debemos conectarnos a nuestra base de daton antes de levantar el servidor.
db.connect()
.then(() => {
    server.listen()
    
})
.catch
 //?seguir en 30 05 2024 1:13:00