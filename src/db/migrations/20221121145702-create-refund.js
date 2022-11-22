'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refunds', {
      refundId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      transactionId: {
        type: Sequelize.STRING(16),
      },
      userId: {
        type: Sequelize.STRING(16),
      },
      bankOwner: {
        type: Sequelize.STRING,
      },
      bankName: {
        type: Sequelize.STRING,
      },
      bankAccount: {
        type: Sequelize.STRING,
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isValid: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      paidAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      transferImage: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('refunds');
  }
};