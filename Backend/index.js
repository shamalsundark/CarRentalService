const mongoose = require('mongoose');
const express = require('express');
const authRouter  = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const ErrorHandler = require('./middleware/errorHandlingMiddleware');
const cors = require('cors');
const app = express();
app.use(cors());

require('dotenv').config();


  mongoose.connect(process.env.MONGODB)
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });

    app.use(express.json());

    app.use(ErrorHandler);
    app.use('/api/auth',authRouter);
    app.use('/api/admin', adminRouter)


app.listen(5000, (err)=>{
  if(err){
    console.log(err)
  }
  console.log('MongoDB listening on port');
});
