'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tags', {
      tagId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      tag: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tags');
  }
};
