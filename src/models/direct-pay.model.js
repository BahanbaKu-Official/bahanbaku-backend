module.exports = (sequelize, Sequelize) => {
    const directPay = sequelize.define('direct-pays', {
        directPayId: {
          type: Sequelize.STRING(16),
          primaryKey: true,
        },
        userId: {
          type: Sequelize.STRING(16),
        },
        recipeId: {
          type: Sequelize.STRING(16),
        },
        addressId: {
          type: Sequelize.STRING(16),
        },
        status: {
          type: Sequelize.STRING,
        },
        total: {
          type: Sequelize.INTEGER,
        },            
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        paymentLink: {
          type: Sequelize.STRING,
          defaultValue: ''    
        },
      });
    return directPay;
}