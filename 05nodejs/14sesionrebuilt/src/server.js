//? Se crea un servidor primero importando express luego en una const aparte se llama la funcion
//?la podemos llamar server pero se ve mucho con el nombre app
const express = require('express')

const app = express()
//?Nuestro servidor tendra que procesar jsons asi qeu le pasamos la middleware de json
//?Esto le hace posible a nuestro server(app) recibir peticiones post que tengan como body archivoo
//? .json y procesarlos def.:  https://kinsta.com/es/base-de-conocimiento/que-es-express/#:~:text=Los%20middlewares%20son%20c%C3%B3digos%20que,la%20petici%C3%B3n%20de%20un%20cliente.
app.use(express.json())
//? Se crea un endpoint para responder que el servidor esta funcionando
app.get("/", (require, response) => {
    response.json({
        message: "Koders APIv1"
    })
})
 //? Se exporta la funcion app
module.exports = app
