const express = require("express");
const router = express.Router();

const auth = require("./auth");
const profile = require("./profile");
const favorites = require("./favorites");

router.use("/", auth);
router.use("/", profile);
router.use("/", favorites);

module.exports = router;
