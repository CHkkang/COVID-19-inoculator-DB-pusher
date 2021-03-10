'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allergy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Allergy.init({
    company: DataTypes.STRING,
    slightIllness: DataTypes.INTEGER,
    seriousIllness: DataTypes.INTEGER,
    deathNum: DataTypes.INTEGER,
    anaphylaxisNum: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    modelName: 'Allergy',
    tableName: 'allergies'
  });
  return Allergy;
};