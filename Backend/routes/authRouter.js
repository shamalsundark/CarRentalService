const express = require('express')

const authRouter=express.Router()

const authController=require('../controllers/authController');
const  trycatchmiddleware  = require('../middleware/tryCatchMiddleware');
const authMiddleware = require('../middleware/authMiddleaware');


authRouter.post('/register',trycatchmiddleware( authController.createuser));
authRouter.post('/login', authController.userLogin);
authRouter.post('/bookdetails',authController.bookDetails);
authRouter.post('/details',authController.getDetails);



module.exports = authRouter;