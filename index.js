const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const messageroute = require('./Routes/message')
const cors = require('cors')


app.use(cors())

mongoose.connect("mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/cont?retryWrites=true&w=majority", {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})
    .then(() => console.log('connected....'))
    .catch((err) => console.log(err));

app.use(express.json());
  
app.use('/cloud', messageroute)

app.listen(process.env.PORT, () => console.log("Running"))