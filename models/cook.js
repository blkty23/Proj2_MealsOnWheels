const mongoose = require('mongoose')
const cookSchema = require('../db/schemas/cookSchema')

const cook = mongoose.model('Cook', cookSchema)

module.exports = cook