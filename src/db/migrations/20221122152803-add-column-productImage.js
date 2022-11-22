'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'productImage', {      
        type: Sequelize.STRING,        
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};