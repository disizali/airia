const express = require("express");
const router = express.Router();

const categories = require("./tours");

router.use("/", categories);

module.exports = router;
