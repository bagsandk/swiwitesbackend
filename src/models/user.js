"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      picture: DataTypes.STRING,
      firebaseUserId: DataTypes.STRING,
      loginMethod: DataTypes.STRING,
      lastLogin: DataTypes.DATE,
      email: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "customer", "casier"),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
