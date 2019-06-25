
const mongoose = require('mongoose');
//const Joi = require("joi");

const carSchema = mongoose.Schema({

    v_name:{
        type: String,
        required: true
    },

    horse_power:{
        type: Number
    },

    color:{
        type: String
    },

    kota:{
        type: String
    },

    model:{
        type: String
    },

    chasis:{
        type: String
    },

    engine: {
        type: String
    },

    registration: {
        type: String
    },

    isSold: {
        type: Boolean
    }
});



module.exports = mongoose.model('Car',carSchema);

const Car = mongoose.model('Car',carSchema);

module.exports.Car = Car;



// function ValidateCar(car) {
//     //Validate
//     const schema = {
//
//         v_name:  Joi.string().required() ,
//
//         horse_power:  Joi.number().required() ,
//
//         color:  Joi.string().required() ,
//
//         kota:  Joi.string().required() ,
//
//         model:  Joi.string().required() ,
//
//         chasis:  Joi.string().required() ,
//
//         engine:   Joi.string().required() ,
//
//         registration:   Joi.string().required() ,
//     };
//     return  Joi.validate(car, schema);
// }
// module.exports.ValidateCar = ValidateCar;

