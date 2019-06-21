const {Sale} = require('../models/sale');


const express = require("express");
const router = express();


router.get("/", async (req, res) =>{

    const sales = await Sale.find().sort('v_name');
    res.send(sales);
});


router.get("/:id", async (req, res)=>{
    const sale = await Sale.findById(req.params.id);

    if(!sale){
        return res.status(404).send("The sale with this id is not found")
    }

    res.send(sale);
});



router.post("/", async (req, res)=>{

    let sale = new Sale ({
        buyer_id:req.body.buyer_id,
        seller_id: req.body.seller_id,
        car_id: req.body.car_id,
        witness1: req.body.witness1,
        witness2: req.body.witness2,
        paymentDetails: req.body.paymentDetails,
        date: req.body.date,
    });
    sale = await sale.save();
    res.send(sale);
});



router.put('/:id', async (req, res)=>{

    const sale = await Sale.findByIdAndUpdate(req.params.id, {
            buyer_id: req.body.buyer_id
        },
        { new:true });


    if(!sale){
        return res.status(404).send("The sale with this id is not found")
    }

    res.send(sale);
});



router.delete('/:id', async (req, res)=>{

    const sale = await Sale.findByIdAndRemove(req.params.id);

    if(!sale){
        return res.status(404).send("The sale with the given id is not found")
    }
    res.send(sale);
});


module.exports = router;