const http = require("node:http")

const server = http.createServer((request, response) => {
    console.log("request1:", request)
    const method = request.method
    const url = request.url
    
    response.end(`${method}: ${url}`)
})

server.listen(8080, () => {
    console.log("Server is listening on port 8080")
}) //?puerto estandar para desarrollo

// const otroServer = http.createServer((request, response) => {
//     response.end("Hola desde otroServer")
// })

// otroServer.listen(8081, () => {
//     console.log("otrosServer is listening on port 8081")
// }

/* Methods
Get---obtener(no se piden con body)
Post--Crear
Delete--Eliminar
Patch---Actuazlizar
Put----reemplazar
 */

