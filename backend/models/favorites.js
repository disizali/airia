"use strict";
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define(
    "Favorites",
    {
      smoking: DataTypes.INTEGER,
      sleeping: DataTypes.INTEGER,
      camping: DataTypes.INTEGER,
      walking: DataTypes.INTEGER,
      allergies: DataTypes.INTEGER
    },
    {}
  );
  Favorites.associate = function(models) {
    Favorites.belongsTo(models.User);
  };
  return Favorites;
};