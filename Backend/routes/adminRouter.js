const express = require('express');

const adminRouter = express.Router();

const adminController = require('../controllers/adminController')

const tryCatchMiddleware = require('../middleware/tryCatchMiddleware');

const verifyToken = require('../middleware/adminAuthMiddleware')

const upload = require('../middleware/photoUpload')

adminRouter.use(express.json())

adminRouter.post('/login',verifyToken,tryCatchMiddleware(adminController.loginAdmin))
adminRouter.post('/cars',upload,tryCatchMiddleware(adminController.createCars))
adminRouter.get('/cars',tryCatchMiddleware(adminController.getAllCars))
adminRouter.get('/getuser',tryCatchMiddleware(adminController.getUser))





module.exports = adminRouter;