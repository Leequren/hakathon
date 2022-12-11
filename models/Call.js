const mongoose = require('mongoose')
const CallSchema = new mongoose.Schema({
    emailOwner: {
        type: String,
        required: true
    },
    emailWorker: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'In process'
    },
    date: {
        type: String,
        required: true,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    }
})

const Call = new mongoose.model('Call', CallSchema)

module.exports = Call