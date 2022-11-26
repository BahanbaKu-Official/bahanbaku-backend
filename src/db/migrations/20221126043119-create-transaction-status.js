'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction_status', {
      statusId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },      
      statusName: {
        type: Sequelize.STRING,
      }
    },{
      timestamps:false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transaction_status');
  }
};