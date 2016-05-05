var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    RestaurantSchema = new Schema({
        name: String,
        location: [
            {
                address: String,
                hours: String,
                longitude: Number,
                latitude: Number
            }
        ]
    });

module.exports = mongoose.model('Restaurant', RestaurantSchema);