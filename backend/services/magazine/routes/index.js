const express = require("express");
const router = express.Router();

const magazine = require("./magazine");

router.use("/", magazine);

module.exports = router;
