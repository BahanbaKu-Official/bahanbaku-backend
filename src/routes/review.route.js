const review = require('../controllers/review.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');

router.post('/:recipeId', jwtMiddleware, review.createReview);

module.exports = router;