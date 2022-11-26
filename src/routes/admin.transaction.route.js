const adminTransaction = require('../controllers/admin.transaction.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')
const adminMiddleware = require('../middlewares/isAdmin')

router.get('/', jwtMiddleware, adminMiddleware, adminTransaction.getAllTransaction);
router.post('/update-status/:transactionId', jwtMiddleware, adminMiddleware, adminTransaction.updateTransactionStatus);

module.exports = router;