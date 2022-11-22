'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('step_ingredients', {
      stepId: {
        type: Sequelize.STRING(16),
      },
      ingredientId: {
        type: Sequelize.STRING(16),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('step_ingredients');
  }
};
