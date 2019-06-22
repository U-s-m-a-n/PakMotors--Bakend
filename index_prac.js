const mongoose = require('mongoose');
const express = require("express");
const app = express();
///------------------------------------------------------///
const persons = require('./routes/persons');
const cars = require('./routes/cars');
const sales = require('./routes/sales');
const users = require('./routes/users');
const accounts = require('./routes/accounts');
const home = require('./routes/home');
///------------------------------------------------------///


mongoose.connect('mongodb://localhost/pakMotors', {useNewUrlParser: true})
    .then(() => console.log("Connected to pakMotors Database"))
    .catch((err) => console.log("Could not connect to mongoDB" + err));

mongoose.set('useFindAndModify', false);


app.use(express.json());
app.use("/pakMotors/persons", persons);
app.use('/pakMotors/cars', cars);
app.use('/pakMotors/sales', sales);
app.use('/pakMotors/users', users);
app.use('/pakMotors/accounts', accounts);
app.use("/", home);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port 3000`);
});




