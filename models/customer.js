const mongoose = require('mongoose')
const customerSchema = require('../db/schemas/customerSchema')

const customer = mongoose.model('comment', customerSchema)

module.exports = customer 