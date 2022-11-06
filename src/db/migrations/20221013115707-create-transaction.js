'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      transactionId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
      },
      recipeId: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      midtransId: {
        type: Sequelize.STRING,
      },
      gopayId: {
        type: Sequelize.STRING,
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      va: {
        type: Sequelize.STRING,
      },
      billKey: {
        type: Sequelize.STRING,
      },
      billerCode: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};
