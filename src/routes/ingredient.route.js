const ingredient = require('../controllers/ingredient.controller');
const router = require('express').Router();

router.get('/', ingredient.getIngredients);

router.post('/', ingredient.createIngredient);

module.exports = router;