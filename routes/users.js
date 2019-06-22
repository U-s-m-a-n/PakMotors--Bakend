const {User} = require('../models/user');


const express = require("express");
const router = express();


router.get("/", async (req, res) => {

    const users = await User.find().sort('v_name');
    res.send(users);
});


router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).send("The user with this id is not found")
    }

    res.send(user);
});


router.post("/", async (req, res) => {

    let user = new User({
        userName: req.body.userName,
        password: req.body.password,
        accounts: req.body.accounts,
    });
    user = await user.save();
    res.send(user);
});


router.put('/:id', async (req, res) => {

    const user = await User.findByIdAndUpdate(req.params.id, {
            userName: req.body.userName,
            password: req.body.password,
            accounts: req.body.accounts


        },
        {new: true});


    if (!user) {
        return res.status(404).send("The user with this id is not found")
    }

    res.send(user);
});


router.delete('/:id', async (req, res) => {

    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) {
        return res.status(404).send("The user with the given id is not found")
    }
    res.send(user);
});


module.exports = router;