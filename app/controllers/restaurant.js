var Restaurant = require('../../app/models/Restaurant');

var actions = {
    /**
     * List all restaurants.
     * 
     * @param  Object req
     * @param  Object res
     */
    index: function (req, res) {
        Restaurant.find(function (err, restaurants) {
            if (err)
                res.send(err);
            else
                res.json(restaurants);
        });
    },

    /**
     * Get a particular restaurant.
     * 
     * @param  Object req
     * @param  Object res
     */
    get: function (req, res) {
        Restaurant.findById(req.params.id, function (err, restaurant) {
            if (err)
                res.send(err);
            else
                res.json(restaurant);
        });
    },

    /**
     * Create a new restaurant record.
     * 
     * @param  Object req
     * @param  Object res
     */
    create: function (req, res) {
        var restaurant = new Restaurant(),
            data = req.body;

        Object.keys(data).forEach(function (prop) {
            restaurant[prop] = data[prop];
        });

        restaurant.save(function (err) {
            if (err)
                res.send(err);
            else
                res.json(restaurant);
        });
    },

    /**
     * Update an existing restaurant.
     * 
     * @param  Object req
     * @param  Object res
     */
    update: function (req, res) {
        Restaurant.findById(req.params.id, function (err, restaurant) {
            if (err)
                res.send(err);

            var data = req.body;
            Object.keys(data).forEach(function (prop) {
                restaurant[prop] = data[prop];
            });

            restaurant.save(function (err) {
                if (err)
                    res.send(err);
                else
                    res.json(restaurant);
            });
        });
    },

    /**
     * Delete a particular restaurant record.
     * 
     * @param  Object req
     * @param  Object res
     */
    delete: function (req, res) {
        Restaurant.remove(
            {
                _id: req.params.id
            },
            function (err, restaurant) {
                if (err)
                    res.send(err);
                else
                    res.json(restaurant);
            }
        );
    }
}

module.exports = actions;