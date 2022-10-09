module.exports = (sequelize, Sequelize) => {
  const tag = sequelize.define('tags', {
    tagId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    tag: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });
  return tag;
}