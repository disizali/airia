"use strict";
module.exports = (sequelize, DataTypes) => {
  const Capacity = sequelize.define(
    "Capacity",
    {
      count: DataTypes.INTEGER
    },
    {}
  );
  Capacity.associate = function(models) {
    Capacity.belongsTo(models.Date);
  };
  return Capacity;
};
