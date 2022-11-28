'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('transactions', 'addressId', {      
        type: Sequelize.STRING(16),        
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};