const step = require('../controllers/step.controller');
const router = require('express').Router();

router.get('/', step.getSteps);

router.post('/:recipeId', step.createStep);

module.exports = router;