const { Sequelize } = require('sequelize');
const env = process.env;

const sequelize = new Sequelize(env.DEV_DB_NAME, env.DEV_DB_USER, env.DEV_DB_PASS, {
  host: env.DEV_DB_HOST,
  dialect: env.DEV_DB_DIALECT,
  operatorAliases: false,

  pool: {
    max: 3,
    min: 0,
    acquire: env.DB_ACQUIRE_POOL,
    idle: env.DB_IDLE_POOL
  }
});

const recipe = require('./recipe.model')(sequelize, Sequelize);


module.exports = {
  Sequelize,
  sequelize,
  recipe,
}