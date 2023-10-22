const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const messageroute = require('./Routes/message')

mongoose.connect(process.env.DB)
    .then(() => console.log('connected....'))
    .catch((err) => console.log(err));

app.use(express.json());
  
app.use('/cloud', messageroute)

app.listen(process.env.PORT, () => console.log("Running"))