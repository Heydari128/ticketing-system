const userService = require('../models/users')
const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status')

module.exports = {
    create: catchAsync(async (req, res) => {
        const user = await userService.create(req.body);
        req.logger.info('user is created.')
        res.status(httpStatus.CREATED).send(user);
    })
}
