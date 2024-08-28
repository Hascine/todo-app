'use strict';
// require hash from helpers
const { hash } = require('../helpers/bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'johnD@mail.com',
          password: hash('test123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Doe',
          email: 'janeD@mail.com',
          password: hash('test123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
