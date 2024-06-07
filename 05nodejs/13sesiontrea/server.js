const express = require("express")

const server = express()

server.use(express.json()) 

server.get('/', (request, response) => {
    response.json({
        message: "Router listo"
    })
})

module.exports = server
