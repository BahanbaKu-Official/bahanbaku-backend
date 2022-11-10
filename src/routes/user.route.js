const user = require('../controllers/user.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')

router.get('/profile', jwtMiddleware, user.getUserById);

module.exports = router;