'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        email: 'john@example.com',
        password: '$2b$10$Mf3ODxQmvosEeqMbCecieOLsl8ToojqT0fuE0BrA/MnJYcSnd8O5K', // Mot de passe haché, par exemple
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: '$2b$10$Mf3ODxQmvosEeqMbCecieOLsl8ToojqT0fuE0BrA/MnJYcSnd8O5K', // Mot de passe haché, par exemple
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
