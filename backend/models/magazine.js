"use strict";
module.exports = (sequelize, DataTypes) => {
  const Magazine = sequelize.define(
    "Magazine",
    {
      cover: DataTypes.TEXT,
      title: DataTypes.TEXT,
      body: DataTypes.TEXT
    },
    {}
  );
  Magazine.associate = function(models) {
    Magazine.belongsToMany(models.Tag, { through: "magazine_tag" });
    Magazine.belongsToMany(models.Tour, {
      through: "magazine_tour",
      as: "Tours"
    });
  };
  return Magazine;
};