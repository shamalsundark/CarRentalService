const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    otp:{
        type:Number,
        required: false,
    },
    isBlock:{
        type: Number,
        required: false,  

    },
    isVerified:{
        type :Boolean,
        default:false
    },
    token:{
        type:String,
        default:''
    },
    adminSuspended:{
        type:Boolean,
        default:false
    }
})
userSchema.pre('save',async function(next){
    try{
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(this.password,salt);
       this.password = hashedPassword 
       next();
     
    }catch(error){
       next(error);
    }
 })
 module.exports=mongoose.model("user",userSchema);