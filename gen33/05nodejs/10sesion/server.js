//?aqui vamos a definir a nuestro servidor /////tambien los endpoints
const express = require('express')
const kodersUsecase = require('./koders.usecase')

//?const app = express() con este nombre en la variable tambien podemos encontrar el nombre del server
const server = express() //?en esta variable se guarda el servidor realmente ya que es la funcion de express ver documentacion para una mejor definicion

server.use(express.json()) //?middleware indica al servidor que recibira peticiones con un body formato json

server.get('/', (request, response) => {
    response.json({
        message: "Kodemia APIv1"
    })
})

// GEt /koders -> Endpoint
server.get("/koders", (request, response) => {
    try {
        const koders = kodersUsecase.getAll() //? en la const koders guardamos la funcion getAll() que esta en kosers.usecase.js

        response.json({
            message: "All koders",
            data: { //?la respuesta completa para que este mejor estructurada
                koders: koders
            }
        })
    } catch (error) {
        response.status(error.status || 500) 

        response.json({
            error: error.message, //?aqui se utiliza el message de error que pusimos en la funcion 
        })
    }
})

server.post("/koders", (request, response) => {
    try {
        const newKoder = request.body
        const koders = kodersUsecase.add(newKoder)

        response.json({
            message: "Koder added",
            data: { koders }  //?forma corta de respuesta, solo es posible porquie la contante donde esta el newKoder anadido se llama igual que la propiedad
        })
    } catch (error) {
        response.status(error.status || 500)

        response.json({
            error: error.message
        })
        
    }
})

server.delete("/koders", (request, response) => {
    try {
        const koders = kodersUsecase.deleteAll()
        response.json({
            message: "All koders deleted",
            data: { koders },
        })
    } catch (error) {
        response.status(error.status || 500)

        response.json({
            error: error.message
        })
        }
})

server.delete("/koders/:name", (request, response) => {
    try {
        const name = request.params.name 
        const koders = kodersUsecase.deleteByName(name) 

        response.json({
            message: "Koder deleted",
            data: { koders }
        })
    } catch (error) {
        response.status(error.status || 500)

        response.json({
            error: error.message
        })
    }

})



module.exports = server //?hace exportable el archivo server.js??? o la constante server donde se guardo el servidor, para que se pueda importar o requerir en algun otro archivo....