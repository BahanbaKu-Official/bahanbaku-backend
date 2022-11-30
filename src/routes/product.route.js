const product = require('../controllers/product.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');
const adminMiddleware = require('../middlewares/isAdmin');

router.get('/', jwtMiddleware, product.getProducts);

router.get('/search', jwtMiddleware, product.getProductByName);

router.post('/', jwtMiddleware, product.createProduct);

router.put('/:productId', jwtMiddleware, adminMiddleware, product.updateProduct);

module.exports = router;