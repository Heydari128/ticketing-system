const ticketService = require('../models/tickets')
const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status')

module.exports = {
    create: catchAsync(async (req, res) => {
        const result = await ticketService.create(req.body)
        req.logger.info('ticket is created.')
        res.status(httpStatus.CREATED).send(result);
    }),
    list: catchAsync(async (req, res) => {
        const result = await ticketService.find()
            // .populate('comments')
            .populate('domain', 'caption _id')
            .populate('userId', 'username role _id')
        res.send(result)
    })
}
