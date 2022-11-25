'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      addressId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },      
      userId: {
        type: Sequelize.STRING(16),
      },
      longitude: {
        type: Sequelize.DOUBLE,
      },
      latitude: {
        type: Sequelize.DOUBLE,
      },
      recieverName: {
        type: Sequelize.STRING,
      },
      recieverPhoneNumber: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,        
      },
      province: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.INTEGER,        
      },
      label: {
        type: Sequelize.STRING,        
      },
      createdAt: {
        type: Sequelize.DATE,        
      },
      updatedAt: {
        type: Sequelize.DATE,        
      },   
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};