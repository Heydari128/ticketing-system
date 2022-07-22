const dotenv = require('dotenv');
const path = require('path');
const joi = require('joi')
dotenv.config({path: path.join(__dirname, '../../.env')})

const configSchema = joi.object().keys({
    NODE_ENV: joi
        .string()
        .valid("production", "development", "test")
        .default('production')
        .required(),
    PORT: joi.number().required(),
    DATABASE_NAME: joi.string().required().trim().disallow(' '),
    MONGO_HOST: joi.string().required().trim().disallow(' '),
    MONGO_PORT: joi.number().required(),
    MONGO_USER: joi.string().optional().trim().disallow(' ').allow(''),
    MONGO_PASSWORD: joi.string().optional().trim().disallow(' ').allow(''),
    LOG_LEVEL: joi.string().default('warn')
}).unknown()

const {value: envVars, error} = configSchema.prefs({errors: {label: 'key'}}).validate(process.env)

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    database: {
        name: envVars.DATABASE_NAME,
        host: envVars.MONGO_HOST,
        port: envVars.MONGO_PORT,
        user: envVars.MONGO_USER,
        password: envVars.MONGO_PASSWORD
    },
    logLevel: envVars.LOG_LEVEL
}
