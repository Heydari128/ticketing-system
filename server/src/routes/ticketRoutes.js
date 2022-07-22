const express = require('express');
const tickets = require('../controllers/ticketController');
const validator = require('../middlewares/validation')
const ticketValidation = require('../validations/ticketValidation')
const router = express.Router();

router.post('/', validator(ticketValidation.create), tickets.create)
router.get('/', validator(ticketValidation.list), tickets.list)

module.exports = router;
