const joi = require('joi')

module.exports = {
    create: {
        body: joi.object().keys({
            contentBody: joi.string(),
            attachments: joi.array(),
            userId: joi.string(),
            ticketId: joi.string(),
        })
    }
}
