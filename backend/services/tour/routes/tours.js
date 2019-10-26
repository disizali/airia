const express = require("express");
const { sequelize: db } = require("../../../models");
const { Category, Parent, Tour, Detail, Date: Dates } = db.models;

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.json(
    await Tour.findByPk(req.params.id, {
      include: [
        { model: Detail, attributes: ["type", "data"] },
        { model: Dates }
      ]
    })
  );
});

router.get("/", async (req, res) => {
  res.json(
    await Parent.findAll({
      attributes: ["id", "name","icon"],
      include: [
        {
          model: Category,
          as: "Categories",
          include: [
            {
              model: Tour,
              as: "Tours",
              orders: [["id", "ASC"]],
              include: [{ model: Dates }]
            }
          ]
        }
      ]
    })
  );
});

module.exports = router;
