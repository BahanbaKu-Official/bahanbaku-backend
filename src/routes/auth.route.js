const auth = require('../controllers/auth.controller');
const router = require('express').Router();

router.post('/login', auth.login);

router.post('/register', auth.register);

router.get('/verify', auth.verify);

module.exports = router;