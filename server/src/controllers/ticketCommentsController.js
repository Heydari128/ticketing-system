const ticketCommentsService = require('../models/ticketComments')
const ticketService = require('../models/tickets')
const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status')

module.exports = {
    create: catchAsync(async (req, res) => {
        try {
            const comment = await ticketCommentsService.create(req.body)
            req.logger.info('ticketComments is created.')
            await ticketService.updateOne({_id: comment.ticketId}, {$addToSet: {comments: [comment._id]}})
            res.status(httpStatus.CREATED).send(comment);
        } catch {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send('');
        }
    })
}
