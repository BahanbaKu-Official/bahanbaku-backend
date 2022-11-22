const tag = require('../controllers/tag.controller');
const router = require('express').Router();
const jwtMiddleware = require('../middlewares/jwtAuth');
const adminMiddleware = require('../middlewares/isAdmin');

router.get('/', jwtMiddleware, tag.getTags);

router.post('/', jwtMiddleware, adminMiddleware, tag.createTag);

router.get('/search', jwtMiddleware, tag.getTagByName);

module.exports = router;