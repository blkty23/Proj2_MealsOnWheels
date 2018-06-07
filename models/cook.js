const mongoose = require('mongoose')
const cookSchema = require('../db/schemas/cookSchema')

const cook = mongoose.model('comment', cookSchema)

module.exports = cook