'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10); // Replace 'password123' with the actual password

    return queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        password: hashedPassword, 
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more user data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
