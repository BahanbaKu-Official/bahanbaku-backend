const ingredient = require('../controllers/ingredient.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');
const adminMiddleware = require('../middlewares/isAdmin');

router.get('/', jwtMiddleware, ingredient.getIngredients);

router.post('/', ingredient.createIngredient);

module.exports = router;