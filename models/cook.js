const mongoose = require('mongoose')
const cookSchema = require('../db/schemas/cookSchema')

const Cook = mongoose.model('cook', cookSchema)

module.exports = Cook