module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define('products', {
    productId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE,
    }
  });
  return product;
}