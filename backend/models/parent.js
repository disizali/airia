"use strict";
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define(
    "Parent",
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
      details: DataTypes.TEXT
    },
    {}
  );
  Parent.associate = function(models) {
    Parent.hasMany(models.Category,{
    });
  };
  return Parent;
};
