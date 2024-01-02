'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    TaskID: DataTypes.INTEGER,
    UserID: DataTypes.INTEGER,
    Title: DataTypes.STRING,
    Description: DataTypes.TEXT,
    DueDate: DataTypes.DATE,
    Priority: DataTypes.ENUM('0','1','2'),
    Status: DataTypes.ENUM('0','1')
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};