"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING
    },
    {}
  );
  Category.associate = function(models) {
    Category.belongsToMany(models.Tour, {
      as: "Tours",
      through: "CategoryTour"
    });
  };
  return Category;
};
