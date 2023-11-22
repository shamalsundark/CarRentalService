const express = require('express')

const authRouter=express.Router()

const authController=require('../controllers/authController');
const  trycatchmiddleware  = require('../middleware/tryCatchMiddleware');


authRouter.post('/register',trycatchmiddleware( authController.createuser));
authRouter.post('/login',trycatchmiddleware( authController.userLogin));


module.exports = authRouter;