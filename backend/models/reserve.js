"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define(
    "Reserve",
    {
      authority: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      refID: DataTypes.STRING
    },
    {}
  );
  Reserve.associate = function(models) {
    Reserve.belongsTo(models.User);
    Reserve.belongsTo(models.Date);
  };
  return Reserve;
};