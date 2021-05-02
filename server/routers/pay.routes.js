const { Router } = require('express');
const generator = require('../controllers/generator.controllers.js');
const router = Router();

router.post('/generatorPay', generator);

module.exports = router;
