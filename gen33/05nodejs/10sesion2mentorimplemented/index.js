//?index.js se encargara de iniciar del servidor
//?inicializar la base de datos
//?poner a escuchar el servidor
const server = require("./server") //?importa el archivo?? donde se guardo el server en  server.js
const mentorsServer = require("./mentorsServer")
const db = require ("./db")

const port1 = 8080
const port2 = 8081

db.init()
server.listen(port1, () => {
    console.log(`server is running at http://localhost:${port1}`)
})

mentorsServer.listen(port2, () => {
    console.log(`server is running at http://localhost:${port2}`)
})
