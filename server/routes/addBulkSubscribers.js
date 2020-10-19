const express = require("express");
const router = express.Router();
const { Subscriber } = require("../utils/models/subscriber");

// #route:  POST /api/add-bulk-subscribers
// #desc:   Add bulk subscribers for dev
// #access: Public
router.post("/", async (req, res) => {
    try {
        const response = await Subscriber.insertMany(req.body);
        console.log("response: ", response);
        res.sendStatus(200);
    } catch (err) {
        console.log("err: ", err);
        res.sendStatus(400);
    }
});

module.exports = router;
