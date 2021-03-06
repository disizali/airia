const express = require("express");
const xlsx = require("node-xlsx");
const { sequelize: db, Sequelize } = require("../../../models");
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

router.get("/:id", async (req, res) => {
  Tour.findByPk(req.params.id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
    order: [[Dates, "start", "ASC"]],
    include: [
      { model: Detail, attributes: ["type", "data"] },
      {
        model: Dates,
        attributes: { exclude: ["createdAt", "updatedAt", "TourId"] },
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
  }).then(tour => {
    if (tour) {
      tour.Dates.forEach((date, index) => {
        date.hotelsData = xlsx.parse(
          `${__dirname}/files/${date.hotels}.xlsx`
        )[0].data;
      });
      return res.send(tour);
    }
    return res.send("no tour");
  });
});

router.put("/:id", async (req, res) => {
  let data = {};
  if (req.body.general != undefined) {
    let general = req.body.general;
    data.name = general.name;
    await Tour.update(data, {
      where: { id: req.body.id }
    });
  }
  if (req.body.details != undefined) {
    let details = req.body.details;
    if (details.gravity) {
      await Detail.update(
        { data: details.gravity },
        {
          where: { TourId: req.body.id, type: 3 }
        }
      );
    }
    if (details.detailItems) {
      const currentDetailItems = await Detail.findAll({
        where: { type: 1, TourId: req.body.id },
        raw: true
      });
      let compareForDelete = currentDetailItems.filter(item => {
        const currentData = JSON.parse(item.data);
        return details.detailItems.some(deailItem => {
          const data = JSON.parse(deailItem.data);
          return data.title === currentData.title;
        })
          ? null
          : item.id;
      });
      compareForDelete = compareForDelete.map(item => item.id);
      Detail.destroy({ where: { id: compareForDelete } });
      // DELETE QUERY
      let compareForInsert = details.detailItems.filter(item => {
        const currentData = JSON.parse(item.data);
        return !currentDetailItems.some(deailItem => {
          const data = JSON.parse(deailItem.data);
          return data.title === currentData.title;
        });
      });
      compareForInsert = compareForInsert.map(item => {
        return { ...item, TourId: req.body.id };
      });

      // console.log(compareForInsert);
      Detail.bulkCreate(compareForInsert);
    }
  }
  res.send("updated");
});

router.get("/", async (req, res) => {
  Tour.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    order: [[Dates, "start", "ASC"]],
    include: [
      { model: Detail, attributes: ["type", "data"] },
      {
        model: Dates,
        attributes: { exclude: ["createdAt", "updatedAt", "TourId"] },
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
  }).then(tours => {
    return res.send(tours);
  });
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
