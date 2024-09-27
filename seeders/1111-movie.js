'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('movies', [
      {
        title: "picky blinders",
        genre: "action",
        release_years: 2023,
        studios_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "salvators",
        genre: "action",
        release_years: 2023,
        studios_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "enigma the kix revenge",
        genre: "action",
        release_years: 2023,
        studios_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "the naturalimz",
        genre: "horror",
        release_years: 2023,
        studios_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "bielp",
        genre: "thriller",
        release_years: 2023,
        studios_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "jackarow",
        genre: "action",
        release_years: 2023,
        studios_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "the plunderers",
        genre: "thriller",
        release_years: 2023,
        studios_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "the bart",
        genre: "action",
        release_years: 2023,
        studios_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "kick andys series",
        genre: "talkshow",
        release_years: 2023,
        studios_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
