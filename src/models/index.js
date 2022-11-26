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
  },
  dialectOptions: { decimalNumbers: true }
});

const recipe = require('./recipe.model')(sequelize, Sequelize);
const ingredient = require('./ingredient.model')(sequelize, Sequelize);
const tag = require('./tag.model')(sequelize, Sequelize);
const user = require('./user.model')(sequelize, Sequelize);
const review = require('./review.model')(sequelize, Sequelize);
const product = require('./product.model')(sequelize, Sequelize);
const transaction = require('./transaction.model')(sequelize, Sequelize);
const step = require('./step.model')(sequelize, Sequelize);
const refund = require('./refund.model')(sequelize, Sequelize);
const bank = require('./bank.model')(sequelize, Sequelize);
const address = require('./address.model')(sequelize, Sequelize);
const payment_method = require('./payment-method.model')(sequelize, Sequelize);
const transaction_status = require('./transaction-status.model')(sequelize, Sequelize);

const recipe_tag = sequelize.define('recipe_tags', {}, { timestamps: false });
const product_transaction = sequelize.define('product_transaction', {}, { timestamps: false });
const recipe_user = sequelize.define('recipe_user', {}, { timestamps: false });
const step_ingredients = sequelize.define('step_ingredients', {}, { timestamps: false });

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

recipe.hasMany(review, {
  foreignKey: 'recipeId',
  as: 'reviews',
});
recipe.hasMany(review, {
  foreignKey: 'recipeId',
  as: 'reviewAvg',
});
review.belongsTo(recipe, {
  foreignKey: 'recipeId',
  as: 'recipe',
})

user.hasMany(review, {
  foreignKey: 'userId',
  as: 'reviews',
});
review.belongsTo(user, {
  foreignKey: 'userId',
  as: 'user',
})

product.hasMany(ingredient, {
  foreignKey: 'productId',
  as: 'ingredients',
})
ingredient.belongsTo(product, {
  foreignKey: 'productId',
  as: 'products',
})

transaction.belongsToMany(product, {
  through: product_transaction,
  as: 'products',
  foreignKey: 'transactionId',
});
product.belongsToMany(transaction, {
  through: product_transaction,
  as: 'transactions',
  foreignKey: 'productId',
})

recipe.hasMany(transaction, {
  foreignKey: 'recipeId',
  as: 'transactions',
})
transaction.belongsTo(recipe, {
  foreignKey: 'recipeId',
  as: 'recipe'
})

recipe.hasMany(step, {
  foreignKey: 'recipeId',
  as: 'steps',
})
step.belongsTo(recipe, {
  foreignKey: 'recipeId',
  as: 'recipe'
})

user.belongsToMany(recipe, {
  through: recipe_user,
  foreignKey: 'recipeId',
  as: 'favorite',
});
recipe.belongsToMany(user, {
  through: recipe_user,
  foreignKey: 'userId',
  as: 'favorite',
});

refund.hasMany(transaction, {  
  foreignKey: 'transactionId',
  as: 'transaction',
});
transaction.belongsTo(refund, {  
  foreignKey: 'transactionId',
  as: 'refund',
});

step.belongsToMany(ingredient, {
  through: step_ingredients,
  foreignKey: 'ingredientId',
});
ingredient.belongsToMany(step, {
  through: step_ingredients,
  foreignKey: 'stepId',  
});

user.hasOne(address,{
  foreignKey:'userId'
})
address.belongsTo(user,{
  foreignKey:'userId'
})

module.exports = {
  Sequelize,
  sequelize,
  recipe,
  ingredient,
  tag,
  user,
  review,
  product,
  transaction,
  step,
  refund,
  bank,
  address,
  payment_method,
  transaction_status
}