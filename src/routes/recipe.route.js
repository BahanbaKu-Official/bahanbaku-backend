const recipe = require('../controllers/recipe.controller');
const router = require('express').Router();

router.get('/', recipe.getRecipes);

router.get('/search', recipe.getRecipeByTitle);

router.get('/:recipeId', recipe.getRecipeById);


router.post('/', recipe.createRecipe);

router.put('/:recipeId', recipe.addTag);

module.exports = router;