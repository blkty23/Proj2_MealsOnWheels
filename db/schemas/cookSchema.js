const Schema = require('mongoose').Schema

const cookSchema = new Schema({
    name: String,
    specialty: String,
    location: String,
    restaurant_desc: Number,
    food_pricepoint: Number
})

module.exports = cookSchema

