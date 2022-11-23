const user = require('../controllers/user.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth')
const multer = require('../config/multer.config');

router.get('/profile', jwtMiddleware, user.getUserById);
router.post('/update/picture', jwtMiddleware, multer.single('profile-file'), user.uploadPicture);
router.post('/update/profile', jwtMiddleware, user.updateProfile);
router.post('/address', jwtMiddleware, user.createAddress);
router.get('/address', jwtMiddleware, user.getAddressByUser);
router.get('/address/:addressId', jwtMiddleware, user.getAddressById);

module.exports = router;