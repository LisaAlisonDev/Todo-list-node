'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        taskId: 1,
        userId: 1,
        title: 'Complete Project',
        description: 'Finish the coding and testing for the project',
        dueDate: new Date('2024-01-31'),
        priority: 'High',
        status: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskId: 2,
        userId: 1,
        title: 'Review Documentation',
        description: 'Review and update project documentation',
        dueDate: new Date('2024-02-10'),
        priority: 'Medium',
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
