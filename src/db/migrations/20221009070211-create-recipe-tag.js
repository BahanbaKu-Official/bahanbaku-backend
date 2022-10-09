'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recipe_tags', {
      recipeId: {
        type: Sequelize.STRING(16),
      },
      tagId: {
        type: Sequelize.STRING(16),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('recipe_tags');
  }
};
