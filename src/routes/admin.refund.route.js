const adminRefund = require('../controllers/admin.refund.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')
const adminMiddleware = require('../middlewares/isAdmin')

router.post('/', jwtMiddleware, adminMiddleware, adminRefund.addBank);
router.get('/', jwtMiddleware, adminMiddleware, adminRefund.getAllRefund);

module.exports = router;