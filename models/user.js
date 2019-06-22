const mongoose = require('mongoose');


var accountSchema = new mongoose.Schema({
    accountId: mongoose.Schema.Types.ObjectId
});


const usersSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
    },
    accounts: [accountSchema],


});

const User = mongoose.model('User', usersSchema);

module.exports.User = User;



