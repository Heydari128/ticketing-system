const domainService = require('../models/domains')
const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status')

module.exports = {
    create: catchAsync(async (req, res) => {
        const result = await domainService.create(req.body)
        req.logger.info('domain is created.')
        res.status(httpStatus.CREATED).send(result);
    }),
    list: catchAsync(async (req, res) => {
        const result = await domainService.find()
        res.status(httpStatus.FOUND).send(result);
    })
}
