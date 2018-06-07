const Schema = require('mongoose').Schema

const customerSchema = new Schema({
    name: String,
    email: String,
    DOB: Number,
    zip: Number,
})

module.exports = customerSchema