const { catchAsync} = require("../utils")

module.exports = {
    getCharacters: catchAsync(require("./getCharacters")),
    postCharacters: catchAsync(require("./postCharacter")),
    getCharacterFilter: catchAsync(require("./getCharacterFilter")),
    getCharacterId: catchAsync(require("./getCharacterId")),
    postCharacter: catchAsync(require("./postCharacter")),
    deleteCharacter: catchAsync(require("./deleteCharacter")),
    putCharacter: catchAsync(require("./putCharacter")),

}