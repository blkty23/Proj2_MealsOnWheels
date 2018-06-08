const mongoose = require('mongoose')
const customerSchema = require('../db/schemas/customerSchema')

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer 