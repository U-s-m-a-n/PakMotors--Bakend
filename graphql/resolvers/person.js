
const Person = require('../../models/person');

module.exports = {
    persons: async () => {
        try {
            const persons = await Person.find();
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
            isWitness: args.personValues.isWitness
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
    }
};