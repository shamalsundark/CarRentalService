const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const Details = require("../models/detailModel")
const Car = require("../models/carSchema")
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
      status: "success",
      message: "User created successfully",
    });
  },

  userLogin: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user) {
      const token = jwt.sign(
        { email: email },
        process.env.USER_ACCESS_TOKEN_SECRET
      );
      return res.status(200).json({
        status: "usersuccess",
        message: "user login successful",
        data: token,
      });
    }
  
    if (
      email === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { id: user._id, email: email },
        process.env.USER_ACCESS_TOKEN_SECRET
      );
      return res.status(200).json({
        status: "adminsuccess",
        message: "admin successfully logged in",
        data: { jwt_token: token },
      });
    } else {
      return res.status(404).json({
        status: "error",
        message: "login failed",
      });
    }
  },

// carByID: async (req,res) =>{
//   const id = req.params.id;
//   const carByID = await this.carByID.findById(id);
//   if(!carByID){
//     return res.status(404).json({error: 'Not Found'});
//   }
//   res.status(200).json({

//     status:'success',
//     message:"successfully fetched car",
//     data:carByID,
//   });
// },

bookDetails : async(req,res)=>{
  
  // console.log(req.body.formData.dropOffLocation);
    console.log(req.body);

    const formData = req.body.formData;

   try {
    const details = new Details ({
      pickupLocation: formData.pickupLocation ||"",
      dropOffLocation: formData.dropOffLocation || '',
      pickupDate: formData.pickupDate,
      pickupTime: formData.pickupTime,
      dropOffDate: formData.dropOffDate,
      dropOffTime: formData.dropOffTime || '',
    });
    const detailsAdd = await details.save()
    console.log(detailsAdd);

    res.status(200)
    .send({detailsAdd})
   } catch (error) {
    console.log(error);
   }
  },

  getDetails: async(req,res) =>{
    console.log(req.body);
    const id = req.body.id
    try {
      const cars = await Car.findOne({_id:id})
      res.status(200)
      .send({message:"Data fetched Successfully",cars})
      console.log(cars);
    } catch (error) {
      console.log(error);
    }
  }
}