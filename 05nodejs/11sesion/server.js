//?aqui vamos a definir a nuestro servidor /////tambien los endpoints
const express = require('express')
const kodersRouter = require("./koders.router")
const mentorsRouter = require("./mentors.router")


//?const app = express() con este nombre en la variable tambien podemos encontrar el nombre del server
const server = express() //?en esta variable se guarda el servidor realmente ya que es la funcion de express ver documentacion para una mejor definicion

//? middleware a nivel de aplicacion
server.use((request, response, next) => {
    console.log("middleware de apllicacion")
    const authorization = request.headers.authorization

    if(authorization !== "alohomora") {
        next()
    } else {
        response.status(403)
        response.json({
            message: "No tienes acceso",
        })

    }
})



server.use(express.json()) //?middleware indica al servidor que recibira peticiones con un body formato json

server.use("/koders", kodersRouter) //?esto se le llama montar router en el server
server.use("/mentors", mentorsRouter)


server.get('/', (request, response) => {
    response.json({
        message: "Kodemia APIv1"
    })
})

//el CRUD de koders se paso a su router  koders.router.js




module.exports = server //?hace exportable el archivo server.js??? o la constante server donde se guardo el servidor, para que se pueda importar o requerir en algun otro archivo....