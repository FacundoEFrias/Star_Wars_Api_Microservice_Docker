const {Router} = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/planets", controllers.getPlanets)

router.post("/planets", controllers.postPlanets)

router.get("/planets/:id", controllers.getPlanetsId)

router.put("/planets/:id", controllers.putPlanets)

router.delete("/planets/:id", controllers.deletePlanets)

module.exports = router;