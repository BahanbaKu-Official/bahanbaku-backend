module.exports = (sequelize, Sequelize) => {
  const subscription = sequelize.define('subscriptions', {
    emailAddress: {
      type: Sequelize.STRING(),
      primaryKey: true,
    },          
  },{
    timestamps:false
  });
  return subscription;
}