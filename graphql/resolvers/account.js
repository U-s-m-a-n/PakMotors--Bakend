
const Account = require('../../models/account');

module.exports = {
    accounts: async () => {
        try {
            const accounts = await Account.find();
            return accounts;
        } catch (err) {
            throw err;
        }
    },

    createAccount: async (args) => {
        const transactionObject = {
            payment: args.accountValues.payment,
            date: args.accountValues.date,
            note: args.accountValues.note
        }
        const account = new Account({
            accountTitle: args.accountValues.accountTitle,
            transactions: transactionObject
        });

        const accountSaved = await account.save()
            .then((result) => {
                console.log(result);
                return { ...result._doc };
            })
            .catch((err) => {
                console.log(err);
            });
        return accountSaved;
    },
    findAccountById:  (args)=>{
        return Account.findOne({_id : args.id._id})
        .then((result)=>{
          console.log(result);
          return {...result._doc}; 
      } )
      .catch((err)=>{
          console.log(err);
      });
    }
};