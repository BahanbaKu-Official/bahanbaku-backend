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
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING(1000),
    },
    recipeId: {
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