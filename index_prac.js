
const mongoose = require('mongoose');
const express = require("express");
const app = express();
///------------------------------------------------------///
const persons = require('./routes/persons');
const cars = require('./routes/cars');
const sales = require('./routes/sales');
const home = require('./routes/home');
///------------------------------------------------------///


mongoose.connect('mongodb://localhost/pakMotors', { useNewUrlParser: true })
    .then(()=>console.log("Connected to pakMotors Database"))
    .catch((err)=>console.log("Could not connect to mongoDB"));

mongoose.set('useFindAndModify', false);


app.use(express.json());
app.use("/pakMotors/persons", persons);
app.use('/pakMotors/cars', cars);
app.use('/pakMotors/sales', sales);
app.use("/", home);

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port 3000`);
});




