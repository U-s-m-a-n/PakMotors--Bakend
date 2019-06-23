
const mongoose = require('mongoose');



var transactionSchema = new mongoose.Schema({
    payment: Number,
    date: Date,
    note: String
});






const accountSchema = mongoose.Schema({
    accountTitle: String,
    transactions: [transactionSchema]


});


module.exports = mongoose.model('Account', accountSchema);

// const Account = mongoose.model('Account', accountSchema);

// module.exports.Account = Account;



