const {Router} = require("express")
const store = require("../database")
const {validateModel} = require("../middlewares")
const catchedAsync = require("../utils/catchAsync");

const router = Router()

router.get("/:model", validateModel, async (req, res) => {
    const {model} = req.params
    const response = await store[model].list()
    res.status(200).json({
        message: "Bienvenido a la Api de Star Ward",
        data: response
    })
})

router.get("/:model/:id", validateModel, catchedAsync( async(req, res) => {
    const {model, id} = req.params
    const response = await store[model].get(id)
    res.status(200).json(response)
}))


router.post("/:model", validateModel, catchedAsync( async(req, res) => {
    const {model}= req.params
    const response = await store[model].insert(req.body)
    res.status(200).json(response)
}))

router.put("/:model/:id", validateModel, catchedAsync( async(req,res)=>{
    const {model, id } = req.params
    const response = await store[model]?.update(id, req.body)
    res.status(200).json(response)

}))
router.delete("/:model/:id", validateModel, catchedAsync( async(req,res)=>{
    const {model, id} = req.params
    const response = await store[model]?.removee(id)
    res.status(200).json(response)
}))



/*router.get("/character", async (req, res) => {
    const response = await Character.list()
    res.status(200).json(response)
})

router.get("/film", async (req, res) => {
    const response = await Film.list()
    res.status(200).json(response)
})*/

module.exports = router