'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionNew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionNew.belongsTo(models.user, {
        as: 'user',
        foreignKey: 'id'
      });
      TransactionNew.belongsTo(models.user, {
        as: 'userrelation',
        foreignKey: 'id'
      });

      TransactionNew.belongsToMany(models.Product, {
        through: 'ProductTransaction',
        foreignKey: 'transactionId'
      });
    }
  }
  TransactionNew.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
          model: 'users', // Pastikan ini sesuai dengan nama tabel
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
  },
    totalPrice: {
      type: DataTypes.FLOAT
    },
    paymentStatus: {
      type: DataTypes.ENUM('pending','success','failed'),
      defaultValue: 'pending'
    },
    transactionDate: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'TransactionNew',
  });
  return TransactionNew;
};