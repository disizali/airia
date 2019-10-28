"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define(
    "Reserve",
    {
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
