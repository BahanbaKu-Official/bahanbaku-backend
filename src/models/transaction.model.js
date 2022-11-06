module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define('transactions', {
    transactionId: {
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
    midtransId: {
      type: Sequelize.STRING,
    },
    gopayId: {
      type: Sequelize.STRING,
    },
    paymentMethod: {
      type: Sequelize.STRING,
    },
    va: {
      type: Sequelize.STRING,
    },
    billKey: {
      type: Sequelize.STRING,
    },
    billerCode: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
  });
  return transaction;
}