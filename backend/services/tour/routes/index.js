const express = require("express");
const router = express.Router();

const categories = require("./tours");

router.use("/tours", categories);

module.exports = router;
