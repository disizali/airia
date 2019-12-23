const express = require("express");
const router = express.Router();

const parents = require("./parents");
const categories = require("./categories");
const tours = require("./tours");

router.use("/parents", parents);
router.use("/categories", categories);
router.use("/tours", tours);

module.exports = router;
