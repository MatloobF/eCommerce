const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("response from router");
});
router.get('/product/:id', (req, res) => {
    res.send("response from router");
});

router.post("/signup/:id", (req, res) => {
    const userData = req.body;
    console.log("Received user data:", userData);
    console.log(req.body) ;
    console.log(req.query) ;
    console.log(req.params) ;
    console.log(req.path) ;
    // Process the user data (e.g., save to database)
    res.send({
        success : true ,
        message : `User ${userData?.name} signed up successfully`
    });
});



module.exports = router;