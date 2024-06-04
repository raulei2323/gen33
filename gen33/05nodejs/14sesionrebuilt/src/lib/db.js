//?EN este archivo crearemos la conexion a la base de datos
//?Importamos mongoose
const mongoose = require('mongoose') 

//? sacamos(deestructuramos) las varialbles de entorno del obejto process.env
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env 

//?URL de conexion usando template strings
const URI =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

//? Creamos la funcion connect. La funcion connect genera la promesa de conexion.
function connect () {
    return mongoose.connect(URI)
}
//?la funcion mongoose.connect retorna la promesa que regresa la funcion connect ya que la usaremos
//?en el archivo index.js (index.js se encarga de levantar la aplicacion)

//?se exporta o se pone como exportable la funcion 
module.export = { connect } 

