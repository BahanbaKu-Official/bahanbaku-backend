'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('banks', {
      bankId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bankName: {
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('banks');
  }
};
