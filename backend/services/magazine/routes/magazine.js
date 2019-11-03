const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../../models");
const { Magazine, Tag } = db.models;

router.get("/", async (req, res) => {
  res.send(
    await Magazine.findAll({
      include: [{ model: Tag, attributes: ["id", "name"] }],
      order: [["id", "DESC"]]
    })
  );
});
router.get("/:id", async (req, res) => {
  res.send(
    await Magazine.findOne({
      where: { id: req.params.id },
      include: [{ model: Tag }]
    })
  );
});

module.exports = router;
