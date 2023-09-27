const Films = require("../data")
const {response} = require("../utils")

module.exports = async (req,res) => {
    const newFilms = await Films.create(req.body)
    response(res, 200 , newFilms)
}