'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ingredients', {
      ingredientId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      ingredient: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.TEXT,
      },
      amount: {
        type: Sequelize.DECIMAL,
      },
      imageUrl: {
        type: Sequelize.STRING(1000),
      },
      recipeId: {
        type: Sequelize.STRING(16),
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ingredients');
  }
};
