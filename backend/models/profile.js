"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      name: DataTypes.STRING,
      family: DataTypes.STRING,
      cardNumber: DataTypes.STRING
    },
    {}
  );
  Profile.associate = function(models) {
    Profile.belongsTo(models.User);
  };
  return Profile;
};
