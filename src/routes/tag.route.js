const tag = require('../controllers/tag.controller');
const router = require('express').Router();

router.get('/', tag.getTags);

router.post('/', tag.createTag);

router.get('/search', tag.getTagByName);

module.exports = router;