module.exports = (sequelize, Sequelize) => {
  const payment_method = sequelize.define('payment_method', {
    paymentId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },      
    paymentName: {
      type: Sequelize.STRING,
    },
    paymentCode: {
      type: Sequelize.STRING,
    },
    paymentImage: {
      type: Sequelize.STRING,
    },
    paymentCategory: {
      type: Sequelize.STRING,
    },
  },{
    timestamps:false
  });
  return payment_method;
}