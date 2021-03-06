"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      firebaseUserId: {
        type: Sequelize.STRING,
      },
      lastLogin: {
        type: Sequelize.DATE,
      },
      picture: {
        type: Sequelize.STRING,
      },
      loginMethod: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM("admin", "customer", "casier"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
