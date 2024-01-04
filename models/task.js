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
      Task.belongsToMany(models.Category, { through : models.TaskCategory, foreignKey: 'taskId'})
      Task.belongsTo(models.User, {foreignKey : 'userId'})
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    dueDate: DataTypes.DATE,
    priority: DataTypes.ENUM(1,2,3),
    status: DataTypes.ENUM(0,1,2),
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};