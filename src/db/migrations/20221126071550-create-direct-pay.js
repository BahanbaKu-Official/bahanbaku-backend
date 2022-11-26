'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('direct-pays', {
      directPayId: {
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
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      paymentLink: {
        type: Sequelize.STRING,        
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('direct-pays');
  }
};
