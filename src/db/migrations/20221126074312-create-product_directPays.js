'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_directPays', {
      productId: {
        type: Sequelize.STRING(16),
      },
      directPayId: {
        type: Sequelize.STRING(16),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_directPays');
  }
};
