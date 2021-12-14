const express = require("express");
const router = new express.Router();
const axios = require("axios");

// Axios get call for users
router.get("/users", async (req, res) => {
  const results = req.query.results || "12";
  const currentPage = req.query.page || "1";
  try {
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${currentPage}&results=${results}&seed=abc`
    );
    res.send(data);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
