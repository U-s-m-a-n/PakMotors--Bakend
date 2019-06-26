const User = require('../../models/user');

module.exports = {
    users: async () => {
        try {
            const users = await User.find().sort({ $natural: -1 });
            return users;
        } catch (err) {
            throw err;
        }
    },

    createUser: async (args) => {
        const userAccount = {
            accountId: args.userValues.accountId
        }

        const user = new User({
            userName: args.userValues.userName,
            password: args.userValues.password,
            accounts: userAccount
        });
        const userSaved = await user.save()
            .then((result) => {
                console.log(result);
                return { ...result._doc };
            })
            .catch((err) => {
                console.log(err);
            });
        return userSaved;
    },
    findUserById:  (args)=>{
        return User.findOne({_id : args.id._id})
        .then((result)=>{
          console.log(result);
          return {...result._doc}; 
      } )
      .catch((err)=>{
          console.log(err);
      });
    }
}