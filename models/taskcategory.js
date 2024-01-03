'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
const task = require('./task');
module.exports = (sequelize, DataTypes) => {
  class TaskCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
      // define association here
    }
  }
  TaskCategory.init({
    taskId: {
      type : DataTypes.INTEGER,
    },
    categoryId: {
      type : DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'TaskCategory',
  });
  return TaskCategory;
};