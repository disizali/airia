"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    "Tour",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Tour.associate = function(models) {
    Tour.belongsToMany(models.Category, {
      as: "Caregories",
      through: "CategoryTour"
    });
  };
  return Tour;
};
