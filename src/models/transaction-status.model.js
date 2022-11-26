module.exports = (sequelize, Sequelize) => {
    const transaction_status = sequelize.define('transaction_status', {
        statusId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        statusName: {
            type: Sequelize.STRING,
        }
    },{
        timestamps:false
    });
    return transaction_status;
}