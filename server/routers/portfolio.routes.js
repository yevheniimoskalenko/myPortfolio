const { Router } = require('express');
const {
  upload,
  experience,
  concept,
  email,
} = require('../controllers/portfolio.controllers.js');

const router = Router();

router.post('/upload', upload);
router.post('/experience', experience);
router.post('/concept', concept);
router.post('/email', email);

module.exports = router;
