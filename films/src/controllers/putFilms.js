const Films = require("../data")
const {response} = require("../utils") 
const axios = require("axios")
module.exports = async (req,res) => {
   
    const films = await Films.putFilm(req.params.id, req.body)
    response(res, 200 , films)
}