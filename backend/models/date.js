"use strict";
module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define(
    "Date",
    {
      start: DataTypes.DATE,
      end: DataTypes.DATE
    },
    {}
  );
  Date.associate = function(models) {
    Date.belongsTo(models.Tour);
  };
  return Date;
};