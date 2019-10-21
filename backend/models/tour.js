"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tour = sequelize.define(
    "Tour",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
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

    Tour.hasMany(models.Date);
  };
  return Tour;
};
