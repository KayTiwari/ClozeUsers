const express = require("express");
const router = new express.Router();
const axios = require("axios");

// Axios get call for users
router.get("/users", async (req, res) => {
    const results = req.query.results || "20";
    const page = req.query.page || "1";
    try {
        const { data } = await axios.get(`https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`);
        res.send(data);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = router;