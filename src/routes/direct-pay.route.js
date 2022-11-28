const directPay = require('../controllers/direct-pay.controller');
const router = require('express').Router();
const multer = require('../config/multer.config');
const jwtMiddleware = require('../middlewares/jwtAuth')


router.get('/', jwtMiddleware, directPay.getDirectPayByUser);
router.get('/payment-method', jwtMiddleware, directPay.getBahanbakuBank);
router.post('/:recipeId', jwtMiddleware, directPay.createDirectPay);
router.post('/submit-payment/:directPayId', jwtMiddleware, multer.single('image'), directPay.uploadPayment);

module.exports = router;