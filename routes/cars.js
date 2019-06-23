// const {Car} = require('../models/car');
//
//
// const express = require("express");
// const router = express();
//
//
// router.get("/", async (req, res) =>{
//
//     const cars = await Car.find();//.sort('v_name');
//     res.send(cars);
// });
//
//
//
//
//
// router.get("/:id", async (req, res)=>{
//     const car = await Car.findById(req.params.id);
//
//     if(!car){
//         return res.status(404).send("The car with this id is not found")
//     }
//
//     res.send(car);
// });
//
//
//
// router.post("/", async (req, res)=>{
//
//     let car = new Car ({
//         v_name:req.body.v_name,
//         horse_power: req.body.horse_power,
//         color: req.body.color,
//         kota: req.body.kota,
//         model: req.body.model,
//         chasis: req.body.chasis,
//         engine: req.body.engine,
//         registration: req.body.registration
//
//     });
//     car = await car.save();
//     res.send(car);
// });
//
//
//
// router.put('/:id', async (req, res)=>{
//
//     const car = await Car.findByIdAndUpdate(req.params.id, {
//             v_name:req.body.v_name,
//             horse_power: req.body.horse_power,
//             color: req.body.color,
//             kota: req.body.kota,
//             model: req.body.model,
//             chasis: req.body.chasis,
//             engine: req.body.engine,
//             registration: req.body.registration
//         },
//         { new:true });
//
//
//     if(!car){
//         return res.status(404).send("The car with this id is not found")
//     }
//
//     res.send(car);
// });
//
//
//
// router.delete('/:id', async (req, res)=>{
//
//     const car = await Car.findByIdAndRemove(req.params.id);
//
//     if(!car){
//         return res.status(404).send("The car with the given id is not found")
//     }
//     res.send(car);
// });
//
//
// module.exports = router;