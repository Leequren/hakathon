const mongoose = require('mongoose')
const FieldSchema = new mongoose.Schema({
    emailOwner: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    square: {
        type: String,
        required: true
    },
    countFert: {
        type: String,
        required: true,
        default: '0'
    },
    countCars: {
        type: String,
        required: true,
        default: '0'
    }
})

const Field = new mongoose.model('Field', FieldSchema)

module.exports = Field