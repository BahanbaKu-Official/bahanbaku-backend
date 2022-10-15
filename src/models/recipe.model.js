module.exports = (sequelize, Sequelize) => {
  const recipe = sequelize.define('recipes', {
    recipeId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    author: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING(1000),
    },
    rating: {
      type: Sequelize.DOUBLE,
    },
    portion: {
      type: Sequelize.INTEGER,
    },
    time: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    },
  });
  return recipe;
}