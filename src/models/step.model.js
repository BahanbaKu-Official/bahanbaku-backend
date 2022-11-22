module.exports = (sequelize, Sequelize) => {
  const step = sequelize.define('steps', {
    stepId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    step: {
      type: Sequelize.STRING(1000),
    },
    sequence: {
      type: Sequelize.INTEGER,
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