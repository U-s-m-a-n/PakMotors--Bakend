const {Account} = require('../models/account');


const express = require("express");
const router = express();


router.get("/", async (req, res) => {

    const accounts = await Account.find().sort('v_name');
    res.send(accounts);
});


router.get("/:id", async (req, res) => {
    const account = await Account.findById(req.params.id);

    if (!account) {
        return res.status(404).send("The account with this id is not found")
    }

    res.send(account);
});


router.post("/", async (req, res) => {

    let account = new Account({
        accountTitle: req.body.accountTitle,
        transactions: req.body.transactions
    });
    account = await account.save();
    res.send(account);
});


router.put('/:id', async (req, res) => {

    const account = await Account.findByIdAndUpdate(req.params.id, {
            accountTitle: req.body.accountTitle,
            transactions: req.body.transactions
        },
        {new: true});


    if (!account) {
        return res.status(404).send("The account with this id is not found")
    }

    res.send(account);
});


router.delete('/:id', async (req, res) => {

    const account = await Account.findByIdAndRemove(req.params.id);

    if (!account) {
        return res.status(404).send("The account with the given id is not found")
    }
    res.send(account);
});


module.exports = router;