
const mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({

            depositedAmount : Number,
            transactionDate : Date,
            accountId: mongoose.Schema.Types.ObjectId
});
var paymentSchema = new mongoose.Schema({
    totalAmount: Number,
    transactions: [transactionSchema],
    });

const salesSchema = mongoose.Schema({

    buyer_id:{
        type:  mongoose.Schema.Types.ObjectId,
        required: true
    },

    seller_id:{
        type:  mongoose.Schema.Types.ObjectId,
        required: true
    },

    car_id:{
        type:  mongoose.Schema.Types.ObjectId,
        required: true
    },

    witness1:{
        type:  mongoose.Schema.Types.ObjectId
    },

    witness2:{
        type:  mongoose.Schema.Types.ObjectId
    },

    paymentDetails: [paymentSchema],

    date: {
        type: Date
    }

});


module.exports = mongoose.model('Sale',salesSchema);

const Sale = mongoose.model('Sale',salesSchema);

module.exports.Sale = Sale;



