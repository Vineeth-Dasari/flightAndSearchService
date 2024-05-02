const CrudRespository = require('./crud_repository');
const { Airport } = require('../models/index');

class AirportRespository extends CrudRespository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRespository;