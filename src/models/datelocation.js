'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DateLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DateLocation.init({
    city: DataTypes.STRING,
    inoculationNum: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    modelName: 'DateLocation',
    tableName: 'date_locations'
  });
  return DateLocation;
};