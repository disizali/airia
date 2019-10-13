const express = require("express");
const { sequelize: db } = require("../../../models");
const { Category, Parent, Tour, Detail } = db.models;

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.json(
    await Tour.findByPk(req.params.id, {
      include: [{ model: Detail, attributes: ["type", "data"] }]
    })
  );
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
