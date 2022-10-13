const transaction = require('../controllers/transaction.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');

router.get('/', jwtMiddleware, transaction.getTransactionsByUser);

router.post('/:recipeId', jwtMiddleware, transaction.createTransaction);

module.exports = router;