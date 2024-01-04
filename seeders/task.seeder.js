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
        priority: '2',
        status: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        taskId: 2,
        userId: 1,
        title: 'Review Documentation',
        description: 'Review and update project documentation',
        dueDate: new Date('2024-02-10'),
        priority: '3',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
