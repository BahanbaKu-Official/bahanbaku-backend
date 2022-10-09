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
const ingredient = require('./ingredient.model')(sequelize, Sequelize);
const tag = require('./tag.model')(sequelize, Sequelize);

const recipe_tag = sequelize.define('recipe_tags', {}, { timestamps: false });

recipe.hasMany(ingredient, {
  foreignKey: 'recipeId',
  as: 'ingredients',
});
ingredient.belongsTo(recipe, {
  foreignKey: 'recipeId',
  as: 'recipe',
})

recipe.belongsToMany(tag, {
  through: recipe_tag,
  as: 'tags',
  foreignKey: 'recipeId',
});
tag.belongsToMany(recipe, {
  through: recipe_tag,
  as: 'recipes',
  foreignKey: 'tagId',
})

module.exports = {
  Sequelize,
  sequelize,
  recipe,
  ingredient,
  tag,
}