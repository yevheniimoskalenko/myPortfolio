const { Router } = require('express');
const {
  upload,
  experience,
} = require('../controllers/portfolio.controllers.js');

const router = Router();

router.post('/upload', upload);
router.post('/experience', experience);

module.exports = router;
