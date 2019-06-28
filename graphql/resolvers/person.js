
const Person = require('../../models/person');

module.exports = {
    persons: async () => {
        try {
            const persons = await Person.find().sort({ $natural: -1 });
            return persons;
        } catch (err) {
            throw err;
        }
    },

    createPerson: async (args) => {

        const person = new Person({
            name: args.personValues.name,
            f_name: args.personValues.f_name,
            image: args.personValues.image,
            cast: args.personValues.cast,
            cnic: args.personValues.cnic,
            address: args.personValues.address,
            mobile: args.personValues.mobile,
            isSeller: args.personValues.isSeller,
            isBuyer: args.personValues.isBuyer,
            isWitness: args.personValues.isWitness,


        });
        const personSaved = await person.save()
            .then((result) => {
                console.log(result);
                return { ...result._doc };
            })
            .catch((err) => {
                console.log(err);
            });
        return personSaved;
    },

    findPersonById:  (args)=>{
        return Person.findOne({_id : args.id._id})
        .then((result)=>{
          console.log(result);
          return {...result._doc}; 
      } )
      .catch((err)=>{
          console.log(err);
      });
    },
    findPersonByCNIC: (args) => {
        return Person.find({ cnic: args.id._id});
    },
    findPersonByName: (args) => {
        return Person.find({ name: new RegExp("^" + args.id._id + ".*", 'i')});
    },
    findAllSellers:  (args)=>{
        return Person.find({isSeller : args.id._id}).sort({ $natural: -1 });
    },
    findAllBuyers:  (args)=>{
        return Person.find({isBuyer : args.id._id}).sort({ $natural: -1 });
    }

};