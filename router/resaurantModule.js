const handleTruck = require('../controller/handleTruck')

//define router
const requestRestaurants = (app) => {
    app.get('/moveResaurant', (req, res) => {
        handleTruck(req, res);
    });
}

module.exports = requestRestaurants;