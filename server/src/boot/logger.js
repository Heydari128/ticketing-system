const {createLogger, format, transports} = require('winston')
const {combine, timestamp, simple, colorize, prettyPrint} = format;
const config = require('../config')
require('winston-daily-rotate-file')
const fs = require('fs')

const logDir = './logs'
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, {recursive: true});
}

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
}

/*const colors = {
    fatal: 'darkred',
    error: 'red',
    warn: 'orange',
    info: 'lightblue',
    debug: 'blue',
    trace: 'green'
}*/

const logger = createLogger({
    levels: logLevels,
    level: config.env === 'development' ? 'trace' : config.logLevel,
    format: combine(format.json(), timestamp()),
    transports: [
        new transports.DailyRotateFile({
            filename: 'logs/app-combined-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '365d',
            level: config.logLevel
        }),
        new transports.File({filename: 'logs/error.log', level: 'error'}),
    ],
    exceptionHandlers: [
        new transports.File({filename: 'logs/exceptions.log'})
    ],
    rejectionHandlers: [new transports.File({filename: "logs/rejections.log"})],
})

if (config.env !== 'production') {
    logger.add(new transports.Console({format: combine(colorize(), prettyPrint(), simple())}))
}

module.exports = logger
