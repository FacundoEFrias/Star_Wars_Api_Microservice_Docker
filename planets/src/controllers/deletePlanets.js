const Planets = require("../data")
const {response} = require("../utils") 
const axios = require("axios")
module.exports = async (req,res) => {
    const {id} = req.params
    const planets = await Planets.deleteFilms(id)
    response (res, 200 , planets)
}