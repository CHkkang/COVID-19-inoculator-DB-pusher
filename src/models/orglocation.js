'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrgLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrgLocation.init({
    city: DataTypes.STRING,
    institution: DataTypes.STRING,
    inoculationNum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrgLocation',
    tableName: 'org_locations'
  });
  return OrgLocation;
};