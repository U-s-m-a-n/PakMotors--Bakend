// const {Person} = require('../models/person');
//
// // const mongoose = require('mongoose');
// // const Joi = require("joi");
// const express = require("express");
// const router = express();
//
//
// router.get("/", async (req, res) =>{
//
//     const persons = await Person.find().sort('name');
//     res.send(persons);
// });
//
//
// router.get("/:id", async (req, res)=>{
//     const person = await Person.findById(req.params.id);
//
//     if(!person){
//         return res.status(404).send("The person with this id is not found")
//     }
//
//     res.send(person);
// });
//
//
//
// router.post("/", async (req, res)=>{
//
//     let person = new Person ({
//         name:req.body.name,
//         f_name: req.body.f_name,
//         image: req.body.image,
//         cast: req.body.cast,
//         cnic: req.body.cnic,
//         address: req.body.address,
//         mobile: req.body.mobile,
//         isSeller: req.body.isSeller,
//         isBuyer: req.body.isBuyer
//
//     });
//     person = await person.save();
//     res.send(person);
// });
//
//
//
// router.put('/:id', async (req, res)=>{
//     const person = await Person.findByIdAndUpdate(req.params.id, {
//         $set: {
//             name:req.body.name,
//             f_name: req.body.f_name,
//             image: req.body.image,
//             cast: req.body.cast,
//             cnic: req.body.cnic,
//             address: req.body.address,
//             mobile: req.body.mobile,
//             isSeller: req.body.isSeller,
//             isBuyer: req.body.isBuyer
//
//         }},
//         { new:true });
//
//     if(!person){
//         return res.status(404).send("The person with this id is not found")
//     }
//
//     res.send(person);
//
// });
//
//
//
// router.delete('/:id', async (req, res)=>{
//
//     const person = await Person.findByIdAndRemove(req.params.id);
//
//     if(!person){
//         return res.status(404).send("The person with the given id is not found")
//     }
//
//     res.send(person);
// });
//
//
//
//
//
//
//
//
// router.get("/bayana/:id", async (req, res)=>{
//     const person = await Person
//         .find({_id: req.params.id , isSeller: true})
//         .limit(10)
//         .sort({name:1})
//         .select({name: 1, cnic:1 , isBuyer:1 , isSeller:1 });
//
//     if(!person){
//         return res.status(404).send("The person with this id is not found")
//     }
//
//     res.send(person);
// });
//
//
//
//
//
// //
// //
// // async  function getPersonsToPrint(){
// //     const persons = await Person
// //         .find({isSeller: true})
// //         .limit(10)
// //         .sort({name:1})
// //         .select({name: 1, cnic:1 , isBuyer:1 , isSeller:1 });
// //
// //     console.log(persons);
// // }
//
// module.exports = router;