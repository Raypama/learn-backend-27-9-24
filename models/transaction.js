'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user, {
        foreignKey: 'id', // Tambahkan foreign key 
      });
      transaction.belongsTo(models.movies, {
        foreignKey: 'movie_id', // Tambahkan foreign key 
      });
      transaction.belongsTo(models.theater, {
        foreignKey: 'theater_id', // Tambahkan foreign key 
      });
    }
  }
  transaction.init({
    user_id: DataTypes.INTEGER,
    theater_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    // total: {
    //   type: DataTypes.FLOAT,
    //   // Set sebagai virtual field
    //   // Hanya digunakan untuk perhitungan dalam model
    //   get() {
    //     const price = this.getDataValue('price');
    //     const quantity = this.getDataValue('quantity');
    //     return price * quantity; // Menghitung total
    //   }
    // }
  }, {
    hooks: {
      beforeCreate: (transaction, options) => {
        transaction.createdAt = new Date(new Date().toISOString().slice(0, 16)); // format tanggal tanpa detik
        transaction.updatedAt = new Date(new Date().toISOString().slice(0, 16));
      },
      beforeUpdate: (transaction, options) => {
        transaction.updatedAt = new Date(new Date().toISOString().slice(0, 16)); // format saat update
      }
    },
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};