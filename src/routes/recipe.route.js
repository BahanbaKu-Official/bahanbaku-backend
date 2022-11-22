const recipe = require('../controllers/recipe.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');
const adminMiddleware = require('../middlewares/isAdmin');

router.get('/', jwtMiddleware, recipe.getRecipes);

router.get('/search', jwtMiddleware, recipe.getRecipeByTitle);

router.get('/:recipeId', jwtMiddleware, recipe.getRecipeById);


router.post('/', recipe.createRecipe);

router.put('/:recipeId', recipe.addTag);

module.exports = router;