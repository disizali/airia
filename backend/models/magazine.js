'use strict';
module.exports = (sequelize, DataTypes) => {
  const Magazine = sequelize.define('Magazine', {
    cover: DataTypes.TEXT,
    title: DataTypes.TEXT,
    body: DataTypes.TEXT
  }, {});
  Magazine.associate = function(models) {
    // associations can be defined here
  };
  return Magazine;
};