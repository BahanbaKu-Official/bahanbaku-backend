module.exports = (sequelize, Sequelize) => {
    const bank = sequelize.define('banks', {
        bankId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bankName: {
            type: Sequelize.STRING,
        }
    },{
        timestamps:false
    });
    return bank;
}