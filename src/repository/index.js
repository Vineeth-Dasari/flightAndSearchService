// This file is created to connect all the repositories to a single service.n

module.exports= {

    CityRepository : require ('./city_repository'),
    FlightRepository : require ('./flight_repository'),
    AirplaneRepository: require ('./airplane_repository')

}