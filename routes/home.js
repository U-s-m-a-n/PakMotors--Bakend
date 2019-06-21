const express = require("express");
const router = express();


router.get("/", (req, res) =>{
    res.send("Welcome Home");
});


module.exports = router;