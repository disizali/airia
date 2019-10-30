const express = require("express");
const { sequelize: db } = require("../../../models");
const { User, Favorites } = db.models;
const { Op } = db.Sequelize;
const router = express.Router();

router.put("/favorites", async (req, res) => {
  const result = await Favorites.update(req.body, {
    where: { UserId: req.body.UserId }
  });
  res.send("updated2");
});

module.exports = router;
