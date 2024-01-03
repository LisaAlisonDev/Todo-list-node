'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        userId: 1, // Assuming there's a user with UserID 1
        categoryName: 'Work',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        categoryName: 'Personal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1, // Assuming there's another user with UserID 2
        categoryName: 'Study',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
