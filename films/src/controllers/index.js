const { catchAsync } = require("../utils")

module.exports = {
    getFilms :  require('./getFilms'),
    getFilmsId: require('./getFilmsId'),
    putFilms: require('./putFilms'),
    deleteFilms: require('./deleteFilms'),
    postFilms: require('./postFilms'),

}