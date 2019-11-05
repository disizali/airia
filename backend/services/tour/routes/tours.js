const express = require("express");
const { sequelize: db } = require("../../../models");
const {
  Category,
  Parent,
  Tour,
  Detail,
  Date: Dates,
  Capacity,
  Magazine
} = db.models;
const router = express.Router();

router.get("/:id", async (req, res) => {
  res.json(
    await Tour.findByPk(req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        { model: Detail, attributes: ["type", "data"] },
        {
          model: Dates,
          attributes: { exclude: ["createdAt", "updatedAt", "TourId"] },
          order: [["start", "ASC"]],
          include: [
            {
              model: Capacity,
              attributes: ["id", "count"]
            }
          ]
        },
        {
          model: Magazine,
          as: "Magazines",
          attributes: ["id", "title", "cover"]
        },
        {
          model: Category,
          attributes: ["id"],
          as: "Categories",
          include: [
            { model: Tour, as: "Tours", attributes: ["id", "name", "image"] }
          ]
        }
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
                { model: Detail, attributes: ["type", "data"] },
                {
                  model: Dates,
                  orders: [["start", "desc"]],
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
