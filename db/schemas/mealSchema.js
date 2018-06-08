const Schema = require('mongoose').Schema
const customerSchema = require('./customerSchema')

const mealSchema = new Schema({
    name: String,
    description: String,
    img: String,
    consumers: [customerSchema],
    price: Number,
    qty: Number,
})

module.exports = mealSchema

