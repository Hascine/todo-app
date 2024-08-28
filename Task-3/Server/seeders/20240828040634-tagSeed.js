'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          name: 'high',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'normal',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'low',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
