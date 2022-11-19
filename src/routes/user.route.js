const user = require('../controllers/user.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')
const multer = require('../config/multer.config');

router.get('/profile', jwtMiddleware, user.getUserById);
router.post('/update/picture', jwtMiddleware, multer.single('profile-file'), user.uploadPicture);
router.post('/update/profile', jwtMiddleware, user.updateProfile);

module.exports = router;