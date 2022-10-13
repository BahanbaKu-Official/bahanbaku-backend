'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('steps', {
      stepId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      step: {
        type: Sequelize.STRING,
      },
      sequence: {
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.STRING(16),
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
    await queryInterface.dropTable('steps');
  }
};
