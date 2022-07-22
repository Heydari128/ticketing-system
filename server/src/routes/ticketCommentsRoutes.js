const express = require('express');
const ticketCommentsController = require('../controllers/ticketCommentsController');
const ticketCommentsValidation = require('../validations/ticketCommentsValidation')
const validator = require('../middlewares/validation')
const router = express.Router();

router.post('/', validator(ticketCommentsValidation.create), ticketCommentsController.create)

module.exports = router;
