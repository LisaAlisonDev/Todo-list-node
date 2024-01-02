'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TaskID: {
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      DueDate: {
        type: Sequelize.DATE
      },
      Priority: {
        type: Sequelize.DataTypes.ENUM('0', '1', '2'),
        defaultValue: '0'
      },
      Status: {
        type: Sequelize.DataTypes.ENUM('0', '1'),
        defaultValue: '0'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};