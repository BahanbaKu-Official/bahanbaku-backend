module.exports = (sequelize, Sequelize) => {
    const refund = sequelize.define('refunds', {
        refundId: {
            type: Sequelize.STRING(16),
            primaryKey: true,
        },
        transactionId: {
            type: Sequelize.STRING(16),
        },
        userId: {
            type: Sequelize.STRING(16),
        },
        bankOwner: {
            type: Sequelize.STRING,
        },
        bankName: {
            type: Sequelize.STRING,
        },
        bankAccount: {
            type: Sequelize.STRING,
        },
        isPaid: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        isValid: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        createdAt: {
            type: Sequelize.DATE
        },
        paidAt: {
            type: Sequelize.DATE,
            allowNull: true
        },
        transferImage: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
        timestamps:false
    });
    return refund;
}