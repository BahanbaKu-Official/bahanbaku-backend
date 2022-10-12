module.exports = (sequelize, Sequelize) => {
  const review = sequelize.define('reviews', {
    reviewId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    review: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.DECIMAL,
    },
    userId: {
      type: Sequelize.STRING(16),
    },
    recipeId: {
      type: Sequelize.STRING(16),
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  });
  return review;
}