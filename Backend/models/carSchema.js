const mongoose = require('mongoose');
const carSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Car',carSchema);