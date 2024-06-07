//?aqui vamos a definir a nuestro servidor /////tambien los endpoints
const express = require('express')
const mentorsUsecase = require('./mentors.usercase')


const mentorsServer = express()

mentorsServer.use(express.json())

mentorsServer.get('/', (request, response) => {
    response.json({
        message: "Kodemia APIv2 mentorside"
    })
})


mentorsServer.get("/mentors", (request, response) => {
    try {
        const mentors = mentorsUsecase.getAll() 

        response.json({
            message: "All mentors",
            data: { 
                mentors: mentors
            }
        })
    } catch (error) {
        response.status(error.status || 500) 

        response.json({
            error: error.message,
        })
    }
})

mentorsServer.post("/mentors", (request, response) => {
    try {
        const newMentor = request.body
        const mentors = mentorsUsecase.add(newMentor)

        response.json({
            message: "Mentor added",
            data: { mentors }  
        })
    } catch (error) {
        response.status(error.status || 500)

        response.json({
            error: error.message
        })
        
    }
})

mentorsServer.delete("/mentors", (request, response) => {
    try {
        const mentors = mentorsUsecase.deleteAll()
        response.json({
            message: "All mentors deleted",
            data: { mentors: mentors },
        })
    } catch (error) {
        response.status(error.status || 500)

        response.json({
            error: error.message
        })
        }
})

mentorsServer.delete("/mentors/:name", (request, response) => {
    try {
        const name = request.params.name 
        const mentors = mentorsUsecase.deleteByName(name) 

        response.json({
            message: "Mentor deleted",
            data: { mentors: mentors }
        })
    } catch (error) {
        response.status(error.status || 500)

        response.json({
            error: error.message
        })
    }

})



module.exports = mentorsServer