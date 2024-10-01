'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category: {
        type: Sequelize.ENUM('series','movie'),
        defaultValue: 'movie'
      },
      release_years: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      studios_id:{
        type: Sequelize.INTEGER,
        references: { //tambahkan disemua relasi yg ada
          model: 'studios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};