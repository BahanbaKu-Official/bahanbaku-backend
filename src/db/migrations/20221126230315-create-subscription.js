'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subscriptions', {
      emailAddress: {
        type: Sequelize.STRING,
        primaryKey: true,        
      },      
    },{
      timestamps:false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subscriptions');
  }
};