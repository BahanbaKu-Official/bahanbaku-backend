const recipe = require('../controllers/recipe.controller');
const router = require('express').Router();

router.get('/', recipe.getRecipes);

router.get('/:recipeId', recipe.getRecipeById);

router.post('/', recipe.createRecipe);

module.exports = router;