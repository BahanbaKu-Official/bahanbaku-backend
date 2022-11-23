module.exports = (sequelize, Sequelize) => {
  const addresses = sequelize.define('addresses', {
    addressId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },      
    userId: {
      type: Sequelize.STRING(16),
    },
    longitude: {
      type: Sequelize.DOUBLE,
    },
    latitude: {
      type: Sequelize.DOUBLE,
    },
    street: {
      type: Sequelize.STRING,
    },
    district: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,        
    },
    province: {
      type: Sequelize.STRING
    },
    zipCode: {
      type: Sequelize.INTEGER,        
    },
    label: {
      type: Sequelize.STRING,        
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },   
  });
  return addresses;
}