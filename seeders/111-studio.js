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
    return queryInterface.bulkInsert('studios', [
      {
        studioName: "Warner Bros. Pictures",
        address: "4000 Warner Blvd, Burbank, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "Universal Pictures",
        address: "100 Universal City Plaza, Universal City, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "Paramount Pictures",
        address: "5555 Melrose Avenue, Los Angeles, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "Walt Disney Studios",
        address: "500 South Buena Vista Street, Burbank, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "20th Century Studios",
        address: "10201 W Pico Blvd, Los Angeles, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "Sony Pictures Entertainment (Columbia Pictures)",
        address: "10202 W Washington Blvd, Culver City, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "Lionsgate Films",
        address: "2700 Colorado Avenue, Santa Monica, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studioName: "Metro-Goldwyn-Mayer (MGM)",
        address: "245 N Beverly Dr, Beverly Hills, California, USA",
        createdAt: new Date(),
        updatedAt: new Date()
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
