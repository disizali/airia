const express = require("express");
const { sequelize: db } = require("../../../models");
const { Category, Parent, Tour } = db.models;

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.json(await Category.findAll({ where: { parentId: req.params.id } }));
});

router.get("/", async (req, res) => {
  res.json(
    await Parent.findAll({
      include: [
        {
          model: Category,
          as: "Categories",
          include: [{ model: Tour, as: "Tours" }]
        }
      ]
    })
  );
});

module.exports = router;
