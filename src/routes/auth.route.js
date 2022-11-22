const auth = require('../controllers/auth.controller');
const router = require('express').Router();

router.post('/login', auth.login);

router.post('/register', auth.register);

router.get('/verify', auth.verifyEmail);
router.post('/forgot-password', auth.forgotPasswordRequest);
router.post('/change-password', auth.forgotPasswordVerify);

module.exports = router;