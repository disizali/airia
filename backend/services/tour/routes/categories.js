const express = require("express");
const { sequelize: db } = require("../../../models");
const { Category, Tour } = db.models;
const router = express.Router();
router.get("/:id", async (req, res) => {
  res.json(
    await Category.findOne({
      attributes: { exclude: ["createdAt", "updatedAt", "parentId"] },
      where: { id: req.params.id },
      include: [
        {
          model: Tour,
          as: "Tours",
          attributes: ["id", "name"],
          required: false
        }
      ]
    })
  );
});

router.get("/", async (req, res) => {
  res.json(
    await Category.findAll({
      attributes: ["createdAt", "updatedAt", "parentId"]
    })
  );
});

module.exports = router;
