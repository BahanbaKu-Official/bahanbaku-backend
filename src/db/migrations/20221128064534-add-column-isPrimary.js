'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('addresses', 'isPrimary', {      
        type: Sequelize.BOOLEAN,        
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};