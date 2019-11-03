"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: DataTypes.TEXT
    },
    {}
  );
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Magazine, { through: "magazine_tag" });
  };
  return Tag;
};
