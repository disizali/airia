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
  };
  return Magazine;
};
