"use strict";
module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define(
    "Date",
    {
      start: DataTypes.DATE,
      end: DataTypes.DATE,
      origin: DataTypes.TEXT,
      destination: DataTypes.TEXT,
      departure: DataTypes.TEXT,
      arrival: DataTypes.TEXT,
      out: DataTypes.TEXT,
      in: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      hotels: DataTypes.STRING,
      hotelsData: DataTypes.VIRTUAL
    },
    {}
  );
  Date.associate = function(models) {
    Date.belongsTo(models.Tour);
    Date.hasOne(models.Capacity);
    Date.hasMany(models.Reserve);
  };
  return Date;
};
