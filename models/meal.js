const mongoose = require('mongoose')
const mealSchema = require('../db/schemas/mealSchema')

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal