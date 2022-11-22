module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define('users', {
    userId: {
      type: Sequelize.STRING(16),
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
    },
    passwordChangedAt: {
      type: Sequelize.DATE,
    },
    profileImage: {
      type: Sequelize.STRING(1000),
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
    },
    emailVerificationToken: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
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
    forgotPasswordToken: {
      type: Sequelize.STRING,
    },
    forgotPasswordCreatedAt: {
      type: Sequelize.DATE,
    },
  });
  return user;
}