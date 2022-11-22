const refund = require('../controllers/refund.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')

router.get('/', jwtMiddleware, refund.getRefundsByUser);
router.get('/banks', jwtMiddleware, refund.getBanks);
router.post('/:transactionId', jwtMiddleware, refund.createRefund);

module.exports = router;