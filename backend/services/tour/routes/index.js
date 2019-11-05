const express = require("express");
const router = express.Router();

const tours = require("./tours");
const categories = require("./categories");

router.use("/tours", tours);
router.use("/categories", categories);

module.exports = router;
