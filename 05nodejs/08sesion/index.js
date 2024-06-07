const express = require('express')

const server = express()
const port = 8080

const koders = [
    {
        name: 'Omar',
        generacion: 33
    },
    {
        name: 'Hugo',
        generacion: 33
    },
    {
        name: 'Fer',
        generacion: 33
    }
]
//?habilita nuestro server para poder recibir peticiones en formato json
server.use(express.json())
//?get es el metodo y '/' es la ruta que en este caso seria la ruta raiz
server.get('/', (request, response) => {
    console.log("GET root")
    // response.end("Hola desde root get")
    response.writeHead(200, {
        'Content-Type': 'text/plain',
    })
    response.end("hola mundo")
})



//?post es el metodo y '/koders' es la ruta\\\\\\esta ruta debe responder con una lista de los koders
server.post("/koders", (request, response) => {
    console.log("body: ", request.body)
    const newKoderName = request.body.name
    const newKoderGeneration = request.body.generacion

    const newKoder = {
        name: newKoderName,
        generacion: newKoderGeneration
    }

    koders.push(newKoder)
    response.json(koders)
})

//? server.get..... get es el METODO y '/koders' es la ruta, 
server.get('/koders', (request, response) => {
    // response.writeHead(200, {
    //     "Content-Type": "application/json",
    // })
    // response.end(JSON.stringify(koders))
    response.status(200)//? se puede cambiar el status de la respuesta, pero no es realmente necesario muchas veces
    response.json(koders)
})
 

//?aqui levantamos el servidor en el puerto 8080 y en la consola vendria el mensaje "server ready"
server.listen(8080, () => {
    console.log("Server ready")
})

//?comando para correr el servidor desde terminal y desde la carpeta raiz del proyecto:
//! node index.js   (o node <nombre del archivo>)

