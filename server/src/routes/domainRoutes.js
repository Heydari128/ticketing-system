const express = require('express');
const validator = require('../middlewares/validation')
const router = express.Router();
const domainController = require('../controllers/domainController');
const domainValidation = require('../validations/domainValidation')

router.post('/', validator(domainValidation.create), domainController.create)
router.get('/', domainController.list)

module.exports = router;
