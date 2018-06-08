const Schema = require('mongoose').Schema
const mealSchema = require('./mealSchema')

const cookSchema = new Schema({
    name: String,
    specialty: String,
    location: String,
    restaurant_desc: String,
    food_pricepoint: Number,
    meals: [mealSchema]
})

module.exports = cookSchema

