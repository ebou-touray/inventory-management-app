const express = require('express');
const app  = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Successfully connected to DB');
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(5000, () => {
  console.log('Express Server started');
});
