'use strict';
module.exports = (sequelize, DataTypes) => {
  const TAG = sequelize.define('TAG', {
    name: DataTypes.TEXT
  }, {});
  TAG.associate = function(models) {
    // associations can be defined here
  };
  return TAG;
};