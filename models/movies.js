'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movies.belongsTo(models.studios, {
        foreignKey: 'studios_id'
      });
      movies.hasMany(models.transaction, {
        foreignKey: 'movie_id'
      });
      // movies.belongsTo(models.transaction, {
      //   foreignKey: 'id', // Tambahkan foreign 
      // });
    }
  }
  movies.init({
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: DataTypes.ENUM('series', 'movie'),
    release_years: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    studios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};