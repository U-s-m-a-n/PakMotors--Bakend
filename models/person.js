
const mongoose = require('mongoose');

//const Joi = require("joi");

const personSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    f_name:{
        type: String
    },

    image: {
        type: String
    },

    cast:{
        type: String
    },

    cnic:{
        type: String,
        required: true
    },

    address:{
        type: String
    },

    mobile:{
        type: Array
    },

    isSeller:{
        type: Boolean
    },

    isBuyer:{
        type: Boolean
    },
    isWitness:{
        type: Boolean
    }


});

module.exports = mongoose.model('Person',personSchema);


// const Person = mongoose.model('Person',personSchema);


// module.exports.Person = Person;





// function ValidatePerson(person) {
//     //Validate
//     const schema = {
//
//         name:  Joi.string().required() ,
//
//         f_name: Joi.string(),
//
//         cast:   Joi.string(),
//
//         cnic: Joi.number().required(),
//
//         address:   Joi.string(),
//
//         mobile:  Joi.array(),
//
//         isSeller: Joi.bool(),
//
//         isBuyer: Joi.bool()
//     };
//     return  Joi.validate(person, schema);
// }
// module.exports.ValidatePerson = ValidatePerson;

