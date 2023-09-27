const Planets = require("../data")
const {response} = require("../utils") 
const axios = require("axios")
module.exports = async (req,res) => {
   
    const planets = await Planets.putPlanet(req.params.id, req.body)
    response(res, 200 , planets)
}