const {Router} = require("express")
const Controllers = require("../controllers")
const router = Router()

router.get("/films", Controllers.getFilms)

router.post("/films", Controllers.postFilms)

router.get("/films/:id", Controllers.getFilmsId)

router.put("/films/:id", Controllers.putFilms)

router.delete("/films/:id", Controllers.deleteFilms)

module.exports = router;