"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    "Tour",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      leader: DataTypes.STRING
    },
    {}
  );
  Tour.associate = function(models) {
    Tour.belongsToMany(models.Category, {
      as: "Categories",
      through: "CategoryTour"
    });

    Tour.hasMany(models.Detail);

    Tour.hasMany(models.Date);

    Tour.belongsToMany(models.Magazine, {
      through: "magazine_tour",
      as: "Magazines"
    });
  };
  return Tour;
};
