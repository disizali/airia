"use strict";
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define(
    "Favorites",
    {
      smoking: { type: DataTypes.INTEGER, defaultValue: 0 },
      sleeping: { type: DataTypes.INTEGER, defaultValue: 0 },
      camping: { type: DataTypes.INTEGER, defaultValue: 0 },
      walking: { type: DataTypes.INTEGER, defaultValue: 0 },
      allergies: { type: DataTypes.INTEGER, defaultValue: 0 }
    },
    {}
  );
  Favorites.associate = function(models) {
    Favorites.belongsTo(models.User);
  };
  return Favorites;
};