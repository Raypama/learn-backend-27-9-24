'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        userName: 'Johny cage',
        email: 'cage@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'micke wall',
        email: 'wall@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'kahn',
        email: 'kahn@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'miraa',
        email: 'mira@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'beni',
        email: 'benben@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'sara',
        email: 'sar@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'rurry',
        email: 'rury@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'vira',
        email: 'virrr@mail.com',
        password: 'admin',
        address: 'Default Address',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
