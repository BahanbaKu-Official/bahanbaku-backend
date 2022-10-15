module.exports = (sequelize, Sequelize) => {
  const recipe = sequelize.define('ingredients', {
      ingredientId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
      },
      ingredient: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.TEXT,
      },
      amount: {
        type: Sequelize.DOUBLE,
      },
      imageUrl: {
        type: Sequelize.STRING(1000),
      },
      recipeId: {
        type: Sequelize.STRING(16),
      },
      productId: {
        type: Sequelize.STRING(16),
      },
      stepId: {
        type: Sequelize.STRING(16),
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  return recipe;
}