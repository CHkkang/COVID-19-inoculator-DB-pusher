'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrgDateLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrgDateLocation.init({
    city: DataTypes.STRING,
    institution: DataTypes.STRING,
    inoculationNum: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    modelName: 'OrgDateLocation',
    tableName: 'org_date_locations'
  });
  return OrgDateLocation;
};