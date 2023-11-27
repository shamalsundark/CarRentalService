const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
    createuser: async (req, res) => {
        const { name, email, password } = req.body;

   
        // if (password !== confirmpassword) {
        //     return res.status(400).json({
        //         status: 'error',
        //         message: 'Passwords do not match',
        //     });
        // }

        await User.create({
            name: name,
            email: email,
            password: password,
           
        });
        // console.log(req.body);

        res.status(200).json({
            status: 'success',
            message: 'User created successfully',
        });
    },

     userLogin:async (req,res)=>{
    const {email,password}=req.body;
    const user =await User.findOne({email});
    if(!user){
        return res.status(404).json({error:"user not found"})
    }
    const token = jwt.sign(
        {email:email.email},
        process.env.USER_ACCESS_TOKEN_SECRET
    );
    res.status(200)
    .json({status:"success",message:"login successfull",data:token})

     },
     
};
