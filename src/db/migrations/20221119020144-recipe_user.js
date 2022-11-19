'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recipe_users', {
      userId: {
        type: Sequelize.STRING(16),        
      },
      recipeId: {
        type: Sequelize.STRING(16),
      },      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('recipe_users');
  }
};
