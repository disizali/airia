"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      phone: DataTypes.TEXT,
      password: DataTypes.TEXT
    },
    {
      hooks: {
        afterCreate(user, options) {
          const { Profile } = sequelize.models;
          Profile.create({ UserId: user.id });
        }
      }
    }
  );
  User.associate = function(models) {
    User.hasOne(models.Profile);
    User.hasMany(models.Reserve);
    User.hasMany(models.Credit);
  };

  return User;
};
