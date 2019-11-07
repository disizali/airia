const express = require("express");
const router = express.Router();
const { sequelize: db, Sequelize } = require("../../../models");
const { Magazine, Tag } = db.models;
const {Op} = Sequelize;
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
router.get("/search/:query", async (req, res) => {
  res.send(
    await Magazine.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${req.params.query}%` } },
          { body: { [Op.like]: `%${req.params.query}%` } }
        ]
      },
      attributes: ["id", "title", "cover"]
    })
  );
});

module.exports = router;
