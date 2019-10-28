"use strict";
module.exports = (sequelize, DataTypes) => {
  const Credit = sequelize.define(
    "Credit",
    {
      amount: DataTypes.INTEGER,
      authority: DataTypes.INTEGER,
      status :DataTypes.INTEGER,
      type: DataTypes.BOOLEAN
    },
    {}
  );
  Credit.associate = function(models) {
    Credit.belongsTo(models.User);
  };
  return Credit;
};
