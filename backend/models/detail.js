"use strict";
module.exports = (sequelize, DataTypes) => {
  const Detail = sequelize.define(
    "Detail",
    {
      type: DataTypes.INTEGER,
      data: DataTypes.TEXT
    },
    {}
  );
  Detail.associate = function(models) {
    Detail.belongsTo(models.Tour);
  };
  return Detail;
};
