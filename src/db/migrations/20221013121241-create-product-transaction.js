'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_transactions', {
      productId: {
        type: Sequelize.STRING(16),
      },
      transactionId: {
        type: Sequelize.STRING(16),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_transactions');
  }
};
