const { Router } = require("express");
const Controllers = require("../controllers");
const middleware = require("../middleware")
const router = Router();

router.get("/characters",Controllers.getCharacters);

router.post("/characters",Controllers.postCharacters);

router.get("/characters/filter/:gender", middleware.genereValidation ,Controllers.getCharacterFilter)

router.get("/characters/:id", middleware.idValidation, Controllers.getCharacterId)

router.put("/characters/:id", Controllers.putCharacter)

router.delete("/characters/:id", Controllers.deleteCharacter)

module.exports = router;