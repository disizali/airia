const express = require("express");
const xlsx = require("node-xlsx");
const { sequelize: db, Sequelize } = require("../../../models");
const {
  Category,
  Parent,
  Tour,
  Detail,
  Date: Dates,
  Capacity
} = db.models;
const router = express.Router();
const { Op } = Sequelize;

const getLowestPrice = data => {
  let lowestPrice = 100000000;
  // return JSON.stringify(date.hotelsData);
  data.slice(1).forEach(row => {
    row.forEach(col => {
      if (typeof col == "number") {
        if (col < lowestPrice) {
          lowestPrice = col;
        }
      }
    });
  });
  return lowestPrice;
};

router.get("/", async (req, res) => {
  let all = await Parent.findAll({
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
  });

  all.forEach(parent => {
    parent.Categories.forEach(category => {
      category.Tours.forEach(tour => {
        tour.Dates.forEach(date => {
          date.price = getLowestPrice(
            xlsx.parse(`${__dirname}/files/${date.hotels}.xlsx`)[0].data
          );
        });
      });
    });
  });

  res.send(all);
});

router.get("/search/:query", async (req, res) => {
  res.send(
    await Tour.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${req.params.query}%` } }]
      },
      attributes: ["id", "name", "image"]
    })
  );
});

module.exports = router;
