const {Flights} = require('../models/index');

class FlightRepository {

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }catch(error){
            console.log("Error at repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;
