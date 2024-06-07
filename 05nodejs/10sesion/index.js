//?index.js se encargara de iniciar del servidor
//?inicializar la base de datos
//?poner a escuchar el servidor
const server = require("./server") //?importa el archivo?? donde se guardo el server en  server.js
const db = require ("./db")

const port = 8081

db.init()
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
