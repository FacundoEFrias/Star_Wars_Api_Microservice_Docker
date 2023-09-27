const Films = require("../data")
const axios = require("axios")

module.exports = async (req,res) => {
    const films = await Films.list()
    res.status(200).json(films)

}