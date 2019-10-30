const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../../models");
const { Magazine } = db.models;

router.get("/", async (req, res) => {
  res.send(await Magazine.findAll({}));
});
router.get("/:id", async (req, res) => {
  res.send(await Magazine.findByPk(req.params.id));
});

module.exports = router;
