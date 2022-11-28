module.exports = (sequelize, Sequelize) => {
  const addresses = sequelize.define('addresses', {
    addressId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },      
    userId: {
      type: Sequelize.STRING(16),
    },
    isPrimary: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
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
      allowNull: true      
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },   
    receiverName: {
      type: Sequelize.STRING,
    },
    receiverPhoneNumber: {
      type: Sequelize.STRING,
    },
  });
  return addresses;
}