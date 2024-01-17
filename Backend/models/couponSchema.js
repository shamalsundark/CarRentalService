const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({

    code:{
        type:String,
        required:true
    },
    discountType:{
        enum:['percentage','fixed'],
        required:true
    },
    discountAmount:Number,
    expirationDate:Date
});
module.exports = mongoose.model('coupon',couponSchema)