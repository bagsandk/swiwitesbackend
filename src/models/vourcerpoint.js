'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VourcerPoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VourcerPoint.init({
    vp_name: DataTypes.STRING,
    vp_amount: DataTypes.INTEGER,
    vp_exp: DataTypes.DATE,
    vp_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VourcerPoint',
  });
  return VourcerPoint;
};