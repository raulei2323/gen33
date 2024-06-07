//? index.js tendra la obligacion de conectarse a la base de datos y de poner a eschucar al servidor
//? Se importan las configuraciones de las variables en ambient o .env 
require("dotenv").config()
//? Se importa el servidor que creamos en el archivo server.js
const server = require("./src/server")
//? se importa el archvo db de la libreria(lib)
const db = require("./src/lib/db")
//? Si en process.env no viene el PORT en que se levantara el servidor entonces se conctara en 
//? la otra opcion
const PORT = process.env.PORT || 8080
//? Primero debemos conectarnos a nuestra base de datos antes de levantar el servidor.
db.connect()
.then(() => {
    console.log("DB connected")
    server.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })
    
})
.catch((error) => {
    console.error("DB connection error:", error)
})
//?Hacemos un then catch
