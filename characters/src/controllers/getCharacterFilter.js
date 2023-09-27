const Characters = require("../data")
const {response} = require("../utils") 
const axios = require("axios")
module.exports = async (req,res) => {
    const {gender} = req.params
    const genderLower = gender.toLowerCase()
    const characters = await Characters.list()
    const charactersFilter = characters.response.filter(c=> c.gender === genderLower)
    response (res, 200 , charactersFilter)
}