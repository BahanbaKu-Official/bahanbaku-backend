const adminRefund = require('../controllers/admin.refund.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')

router.post('/', jwtMiddleware, adminRefund.addBank);
router.get('/', jwtMiddleware, adminRefund.getAllRefund);

module.exports = router;