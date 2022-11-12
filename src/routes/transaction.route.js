const transaction = require('../controllers/transaction.controller');
const simulateTransaction = require('../controllers/sandbox-simulator.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');

router.get('/', jwtMiddleware, transaction.getTransactionsByUser);

router.post('/confirm', transaction.confirmTransaction);

router.post('/pay', simulateTransaction.simulate);

router.post('/:recipeId', jwtMiddleware, transaction.createTransaction);


module.exports = router;