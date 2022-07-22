const joi = require('joi')
const {ROLES, DEFAULT_ROLE, DEFAULT_USER_SETTINGS} = require('../config/defaultConsts')

module.exports = {
    create: {
        body: joi.object().keys({
            name: joi.string().required().disallow(' '),
            domains: joi.array().optional(),
            username: joi.string().regex(/^[a-z0-9_.-]+$/i).required().disallow(' ').min(5).max(30),
            password: joi.string().min(8).max(100).required(),
            role: joi.string().valid(...ROLES).default(DEFAULT_ROLE).allow(''),
            address: joi.string().allow(''),
            email: joi.string().regex(/.+@.+\..+/i).lowercase().required(),
            whatsApp: joi.string().allow(''),
            phoneNumber: joi.string().allow(''),
            mobile: joi.string().allow(''),
            settings: joi.object().default(DEFAULT_USER_SETTINGS).optional(),
        })
    }
}
