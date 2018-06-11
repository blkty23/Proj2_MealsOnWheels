const mongoose = require('mongoose')
const mealSchema = require('../db/schemas/mealSchema')

const Meal = mongoose.model('meal', mealSchema)

module.exports = Meal