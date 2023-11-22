const express = require('express');

const adminRouter = express.Router();

const adminController = require('../controllers/adminController')

const tryCatchMiddleware = require('../middleware/tryCatchMiddleware');

const verifyToken = require('../middleware/adminAuthMiddleware')

adminRouter.use(express.json())

adminRouter.post('/login',tryCatchMiddleware(adminController.loginAdmin))
adminRouter.post('/cars',verifyToken,tryCatchMiddleware(adminController.createCars))






module.exports = adminRouter;