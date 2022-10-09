'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      recipeId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      author: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.STRING(1000),
      },
      rating: {
        type: Sequelize.DECIMAL,
      },
      portion: {
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      steps: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
  }
};