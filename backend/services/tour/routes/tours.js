const express = require("express");
const { sequelize: db } = require("../../../models");
const { Category, Parent, Tour, Detail, Date: Dates, Capacity } = db.models;
const router = express.Router();
router.get("/:id", async (req, res) => {
  res.json(
    await Tour.findByPk(req.params.id, {
      include: [
        { model: Detail, attributes: ["type", "data"] },
        { model: Dates, include: [{ model: Capacity }] }
      ]
    })
  );
});

router.get("/", async (req, res) => {
  res.json(
    await Parent.findAll({
      attributes: ["id", "name", "icon"],
      include: [
        {
          model: Category,
          as: "Categories",
          attributes: ["id", "name", "parentId"],
          include: [
            {
              model: Tour,
              as: "Tours",
              attributes: { exclude: ["createdAt", "updatedAt"] },
              orders: [["id", "ASC"]],
              include: [
                {
                  model: Dates,
                  include: [{ model: Capacity, attributes: ["id", "count"] }]
                }
              ]
            }
          ]
        }
      ]
    })
  );
});

module.exports = router;
