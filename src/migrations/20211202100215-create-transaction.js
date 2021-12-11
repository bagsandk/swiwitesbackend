"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.FLOAT,
      },
      customerId: {
        type: Sequelize.INTEGER,
      },
      kasirId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Transactions");
  },
};
