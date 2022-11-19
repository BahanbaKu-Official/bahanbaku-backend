const favorite = require('../controllers/favorite.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')

router.get('/', jwtMiddleware, favorite.getFavorites);
router.post('/:recipeId', jwtMiddleware, favorite.addFavorite);
router.delete('/:recipeId', jwtMiddleware, favorite.deleteFavorite);

module.exports = router;