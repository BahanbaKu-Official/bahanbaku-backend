module.exports = (sequelize, Sequelize) => {
  const step = sequelize.define('steps', {
    stepId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    step: {
      type: Sequelize.STRING,
    },
    sequence: {
      type: Sequelize.INTEGER,
    },
    recipeId: {
      type: Sequelize.STRING(16),
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
  });
  return step;
}