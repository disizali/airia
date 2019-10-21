const express = require("express");
const { sequelize: db } = require("../../../models");
const { User, Profile } = db.models;
const { Op } = db.Sequelize;
const router = express.Router();

router.put("/profile", async (req, res) => {
  await Profile.update(req.body, { where: { UserId: req.body.id } });
  res.send("updated");
});

module.exports = router;
