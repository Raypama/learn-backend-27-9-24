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
    return queryInterface.bulkInsert('theater', [
      {
        theaterName: 'mall slipi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'XXI jkt centre',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'XXI cijanjung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'cgv detos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'cgv dmall',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theaterName: 'cgv bandung',
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
