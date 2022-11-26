module.exports = (sequelize, Sequelize) => {
    const directPay = sequelize.define('direct-pays', {
        directPayId: {
          type: Sequelize.STRING(16),
          primaryKey: true,
        },
        userId: {
          type: Sequelize.STRING,
        },
        recipeId: {
          type: Sequelize.STRING,
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