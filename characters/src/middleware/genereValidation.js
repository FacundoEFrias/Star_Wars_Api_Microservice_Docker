const { ClientError} = require("../utils/errors")
module.exports = (req,res,next) => {
    const { gender } = req.params
    if(["male","female", "n/a"].includes(gender.toLowerCase()))
     return next()
    else throw new ClientError("Error en el genero", 401)
}