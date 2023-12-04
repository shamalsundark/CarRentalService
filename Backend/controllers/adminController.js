const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const car = require("../models/carSchema");
const userSchema = require("../models/userSchema")

require("dotenv").config();


module.exports = {
  loginAdmin: async (req, res) => {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { username: username },
        process.env.ADMIN_ACCESS_TOKEN_SECRET
      );
      res.status(200).json({
        status: "success",
        message: "successfully logged in",
        data: { jwt_token: token },
      });
    } else {
      return res.status(404).json({
        status: "error",
        message: "admin logged in failed",
      });
    }
  },

  createCars: async (req, res) => {
  
        const { title, description, price, image, model,seat,fuel,transmission } = req.body;
  
        const cars = await car.create({
          title,
          description,
          price,
          image,
          model,
          seat,
          fuel,
          transmission
        });
  
        if (!cars) {
          return res.status(404).json({ error: "Car not created" });
        }
  
        res.status(201).json({
          status: "success",
          message: "Successfully created car",
        });
   
  },

  getAllCars: async (req, res) => {
    const allcars = await car.find();
    res.status(200).json({
      status: "success",
      message: "successfully fetched",
      data: allcars,
    });
  },

viewCarById: async(req,res)=>{
  const carId = req.params.id;
  const car = await car.findById(carId);
  if(!car){
    return res.status(404).json({error:"car not found"});
  }  
  res.status(200).json({
    status: "success",
    message:"successfully fetched car",
  })
},

deleteCar:async (req,res)=>{
  const {id} = req.body;
  await car.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    message:"successfully deleted car",
  });
},
getUser:async(req,res)=>{
  const users = await userSchema.find()
  res.json(users);
}

};
