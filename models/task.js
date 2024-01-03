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
    priority: DataTypes.ENUM('High','Medium','Low'),
    status: DataTypes.ENUM('Pending','In Progress', 'Closed')
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};