
const Sale = require('../../models/sale');

module.exports = {
    sales: async () => {
        try {
            const sales = await Sale.find();
            return sales;
        } catch (err) {
            throw err;
        }
    },

    createSale: async (args) => {

        const saleTransaction ={
            depositedAmount:  args.saleValues.depositedAmount,
            transactionDate:  new Date().toString(),
            accountId:  args.saleValues.accountId
        }
        const salePayment = {
            totalAmount:  args.saleValues.totalAmount,
            transactions: saleTransaction
        }
       
        const sale = new Sale({
            buyer_id: args.saleValues.buyer_id,
            seller_id: args.saleValues.seller_id,
            car_id: args.saleValues.car_id,
            witness1: args.saleValues.witness1,
            witness2: args.saleValues.witness2,
            paymentDetails: salePayment,
            date: new Date().toString()
        });
        const saleSaved = await sale.save()
            .then((result) => {
                console.log(result);
                return { ...result._doc };
            })
            .catch((err) => {
                console.log(err);
            });
        return saleSaved;
    },
    findSaleById:  (args)=>{
        return Sale.findOne({_id : args.id._id})
        .then((result)=>{
          console.log(result);
          return {...result._doc}; 
      } )
      .catch((err)=>{
          console.log(err);
      });
    },
    findSaleBySellerId:  (args)=>{
        return Sale.find({seller_id : args.id._id});
    },
    findSaleByBuyerId:  (args)=>{
        return Sale.find({buyer_id : args.id._id});
    },
    findSaleByCarId:  (args)=>{
        return Sale.find({car_id : args.id._id});
    }
};