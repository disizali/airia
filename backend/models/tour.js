"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    "Tour",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
      leader: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER
    },
    {}
  );
  Tour.associate = function(models) {
    Tour.belongsToMany(models.Category, {
      as: "Caregories",
      through: "CategoryTour"
    });

    Tour.hasMany(models.Detail);
  };
  return Tour;
};
