const mongoose = require('mongoose')
const WorkersOnFarmsSchema = new mongoose.Schema({
    idWorker: {
        type: String,
        required: true
    },
    idFarm: {
        type: String,
        required: true
    }
})

const WorkersOnFarms = mongoose.model('WorkersOnFarms', WorkersOnFarmsSchema)