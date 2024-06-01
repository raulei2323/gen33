const express = require("express")
const kodersRouter = require("./routes/koders.router")

const app = express()
//middleware
app.use("/koders", kodersRouter)

// middleware
app.use(express.json())

app.get("/", (request, response) => {
    response.json({
        "message": "Koders APIv1",
    })
})

module.exports = app
