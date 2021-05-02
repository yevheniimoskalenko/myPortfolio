const { Router } = require('express');
const login = require('../controllers/login.controllers.js');

const router = Router();

router.post('/login', login);

module.exports = router;
