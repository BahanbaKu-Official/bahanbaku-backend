const directPay = require('../controllers/direct-pay.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')

router.get('/', jwtMiddleware, directPay.getDirectPayByUser);
router.post('/:recipeId', jwtMiddleware, directPay.createDirectPay);
router.post('/submit-payment/:directPayId', jwtMiddleware, directPay.uploadPayment);

module.exports = router;