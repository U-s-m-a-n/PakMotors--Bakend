
const Car = require('../../models/car');

module.exports = {

    cars: () => {
        return Car.find();
    },

    createCar: async (args) => {

        const car = new Car({
            v_name: args.carValues.v_name,
            horse_power: args.carValues.horse_power,
            color: args.carValues.color,
            kota: args.carValues.kota,
            model: args.carValues.model,
            chasis: args.carValues.chasis,
            engine: args.carValues.engine,
            registration: args.carValues.registration,
            isSold: args.carValues.isSold
        });

        const carSaved = await car.save()
            .then((result) => {
                console.log(result);
                return { ...result._doc };

            })
            .catch((err) => {
                console.log(err);
            });
        // cars.push(car);

        return carSaved;
    },



    findCarById: (args) =>  {
        return Car.find({_id:args.id._id});
    },
    findCarByHorsePower: (args) => {
        return Car.find({ horse_power: args.id._id });
    },
    findCarByModel: (args) => {
        return Car.find({ model: args.id._id });
    },
    findCarByChasis: (args) => {
        return Car.find({ chasis: args.id._id });
    },
    findCarByEngine: (args) => {
        return Car.find({ engine: args.id._id });
    },
    findCarByRegistration: (args) => {
        return Car.find({ registration: args.id._id });
    },
    findCarByIsSold: (args) => {
        return Car.find({ isSold: args.id._id });
    }


};