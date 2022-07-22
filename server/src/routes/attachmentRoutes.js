const express = require('express');
const attachments = require('../controllers/attachmentController');
const validator = require('../middlewares/validation')
const userValidation = require('../validations/userValidation')
const router = express.Router();

router.post('/', validator(userValidation.create), attachments.create)

module.exports = router;
