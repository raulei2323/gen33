const express = require("express")
const kodersUsecase = require("../usecases/koders.usecase")

const router = express.Router()

//?GET /koders
router.get("/", async(request, response) => {
    try {
        const koders = await kodersUsecase.getAll()
        response.json({
            success: true,
            data: { koders },
        })
        } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }

//? POST /koders
router.post("/", async (request, response) => {
    try {
        const kodersCreated = await kodersUsecase.create(request.body)
        response.json({
            success: true,
            data: { koder: kodersCreated }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})

//GET / koders?:id
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params
        //const id = request.params.id   // esta linea hace lo mismo que la 42
        const koder = await kodersUsecase.getById(id)

        response.json({
            success: true,
            data: { koder },
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})
//DELETE /koders/:id
router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params
        const kodersDeleted = await kodersUsecase.deleteById

        response.json({
            success: true,
            data: { koder: kodersDeleted },
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})

//Patch /koders/:id
router.patch("/:id", async (request,response) => {
    try {
        const { id } = request.params
        const koderUpdated = await kodersUsecase.updateById(id. request.body)

        response.json({
            success: true,
            data: { koderUpdated }
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        })
    }
})

})


module.exports = router