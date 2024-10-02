const express = require ('express');

const {FlightMiddleware} = require('../../middlewares/index');

const CityController = require('../../controllers/city_controller');
const FlightController = require ('../../controllers/flight_controller');
const AirportController = require('../../controllers/airport_controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


router.post('/flights', FlightMiddleware.validateCreateFlight, FlightController.create);

router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);


router.post('/airports', AirportController.create);

module.exports = router;