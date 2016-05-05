function routes(express) {
    var router = express.Router(),
        restaurant = require('../../app/controllers/restaurant');

    router.get('/restaurants', restaurant.index);
    router.post('/restaurants', restaurant.create);
    router.get('/restaurants/:id', restaurant.get);
    router.put('/restaurants/:id', restaurant.update);
    router.delete('/restaurants/:id', restaurant.delete);

    return router;
}

module.exports = routes;