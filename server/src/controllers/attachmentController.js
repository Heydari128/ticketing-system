const attachmentService = require('../models/attachments')
const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status')

module.exports = {
    create: catchAsync(async (req, res) => {
        const result = await attachmentService.create(req.body)
        req.logger.info('attachment is created.')
        res.status(httpStatus.CREATED).send(result);
    })
}
