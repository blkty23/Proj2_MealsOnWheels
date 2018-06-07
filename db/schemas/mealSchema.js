const Schema = require('mongoose').Schema

const mealSchema = new Schema({
    name: String,
    description: String,
    img: String,
    consumer: [Array],
    price: Number,
    qty: Number
})

module.exports = mealSchema

