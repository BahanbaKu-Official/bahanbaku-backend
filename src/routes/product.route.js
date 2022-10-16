const product = require('../controllers/product.controller');
const router = require('express').Router();

router.get('/', product.getProducts);

router.get('/search', product.getProductByName);

router.post('/', product.createProduct);

module.exports = router;