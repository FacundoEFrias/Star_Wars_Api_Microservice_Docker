const { ClientError} = require("../utils/errors")
module.exports = (req,res,next) => {
    const { id } = req.params
    if (!isNaN(id)) {
        return next()
    }
    else throw new ClientError("Error en el id", 401)
}