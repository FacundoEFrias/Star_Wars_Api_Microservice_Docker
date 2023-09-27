const Films = require("../data")
const {response} = require("../utils") 
const axios = require("axios")
module.exports = async (req,res) => {
    const {id} = req.params
    const films = await Films.deleteFilm(id)
    response (res, 200 , films)
}