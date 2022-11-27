const subscription = require('../controllers/subscription.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');
const adminMiddleware = require('../middlewares/isAdmin');

router.get('/', jwtMiddleware, adminMiddleware, subscription.getSubscription);
router.post('/', subscription.addSubscription);

module.exports = router;