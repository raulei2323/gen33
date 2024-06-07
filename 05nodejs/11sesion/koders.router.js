const express = require("express")

const kodersUsecase = require('./koders.usecase')
const router = express.Router()

router.use((request, response, next) =>{
    console.log("Middleware a nivel de Router(koders)")
    next()
})


router.get("/", () => {}, (request, response, next) => {
    console.log("middleware a nivel de ruta")
    next()

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

router.post("/", (request, response) => {
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

router.delete("/", (request, response) => {
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

router.delete("/:name", (request, response) => {
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


module.exports = router