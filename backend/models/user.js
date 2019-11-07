"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      phone: DataTypes.TEXT,
      password: DataTypes.TEXT,
      inviter: DataTypes.INTEGER
    },
    {
      hooks: {
        afterCreate(user, options) {
          const { Profile, Favorites } = sequelize.models;
          Profile.create({ UserId: user.id });
          Favorites.create({ UserId: user.id });
        }
      }
    }
  );
  User.associate = function(models) {
    User.hasOne(models.Profile);
    User.hasMany(models.Reserve);
    User.hasMany(models.Credit);
    User.hasOne(models.Favorites);
  };

  return User;
};
