const joi = require('joi')

module.exports = {
    create: {
        body: joi.object().keys({
            caption: joi.string().required().disallow(' ')
        })
    }
}
