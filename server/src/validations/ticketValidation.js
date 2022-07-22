const joi = require('joi')
const {TICKET_STATUSES, DEFAULT_TICKET_STATUS} = require('../config/defaultConsts')

module.exports = {
    create: {
        body: joi.object().keys({
            subject: joi.string().required().disallow(' '),
            contentBody: joi.string(),
            userId: joi.string(),
            status: joi.string().valid(...Object.keys(TICKET_STATUSES)).default(DEFAULT_TICKET_STATUS),
            attachments: joi.array(),
            domain: joi.string(),
            comments: joi.array()
        })
    },
    list: {

    }
}
