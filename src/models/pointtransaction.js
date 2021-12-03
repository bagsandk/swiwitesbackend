'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PointTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PointTransaction.init({
    operationType: DataTypes.STRING,
    sourceType: DataTypes.STRING,
    sourceId: DataTypes.INTEGER,
    targetType: DataTypes.STRING,
    targetId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    point_balance: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'PointTransaction',
  });
  return PointTransaction;
};