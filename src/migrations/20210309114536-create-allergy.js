'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('allergies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      slight_illness: {
        type: Sequelize.INTEGER
      },
      serious_illness: {
        type: Sequelize.INTEGER
      },
      death_num: {
        type: Sequelize.INTEGER
      },
      anaphylaxis_num: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('allergies');
  }
};