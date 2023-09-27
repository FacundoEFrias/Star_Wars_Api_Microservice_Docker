const Characters = require("../data")
const {response} = require("../utils") 
const axios = require("axios")
module.exports = async (req,res) => {
    const {id} = req.params
    const characters = await Characters.deleteCharacters(id)
    response (res, 200 , characters)
}