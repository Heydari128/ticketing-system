const express = require('express');
const users = require('../controllers/userController');
const validator = require('../middlewares/validation')
const userValidation = require('../validations/userValidation')
const router = express.Router();

router.post('/', validator(userValidation.create), users.create)

module.exports = router;

// https://stackoverflow.com/questions/29796205/express-route-separation-methods
