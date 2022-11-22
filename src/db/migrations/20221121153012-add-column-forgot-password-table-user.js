'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'forgotPasswordToken', {      
        type: Sequelize.STRING,        
    }),
    await queryInterface.addColumn('users', 'forgotPasswordCreatedAt', {      
        type: Sequelize.DATE,        
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('refunds');
  }
};