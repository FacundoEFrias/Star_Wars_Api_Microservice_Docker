const Planets = require("../data")
const axios = require("axios")
const {response} = require("../utils")

module.exports = async (req,res) => {
    const planets = await Planets.list()
    response(res, 200 , planets)
}