const { catchAsync} = require("../utils")

module.exports = {
    getPlanets : catchAsync(require('./getPlanets')),
    postPlanets: catchAsync(require('./postPlanets')),
    getPlanetsId: catchAsync(require('./getPlanetsId')),
    putPlanets: catchAsync(require('./putPlanets')),
    postPlanets: require('./postPlanets'),
    deletePlanets: catchAsync(require('./deletePlanets')),
}