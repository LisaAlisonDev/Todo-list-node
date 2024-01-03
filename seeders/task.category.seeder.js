'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TaskCategories', [
      {
        taskId: 1, // Assuming there's a task with TaskID 1
        categoryId: 1, // Assuming there's a category with CategoryID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskId: 2, // Assuming there's a task with TaskID 2
        categoryId: 2, // Assuming there's a category with CategoryID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskId: 3, // Assuming there's a task with TaskID 3
        categoryId: 3, // Assuming there's a category with CategoryID 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more task-category associations as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TaskCategories', null, {});
  },
};
