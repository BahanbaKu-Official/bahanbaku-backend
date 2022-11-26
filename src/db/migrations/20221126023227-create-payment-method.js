'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_methods', {
      paymentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },      
      paymentName: {
        type: Sequelize.STRING,
      },
      paymentImage: {
        type: Sequelize.STRING,
      },
      paymentCategory: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payment_methods');
  }
};