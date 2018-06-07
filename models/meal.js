const mongoose = require('mongoose')
const mealSchema = require('../db/schemas/mealSchema')

const meal = mongoose.model('comment', mealSchema)

module.exports = meal