// https://nodejs.org/api/
// https://github.com/unjs/nitro
// Nitro provides a powerful toolchain and a runtime framework from the UnJS ecosystem to build and deploy any JavaScript server, anywhere!
// const EventEmitter = require('events')
const express = require('express')
const app = express()
const database = require('./src/boot/database')
const logger = require('./src/boot/logger')
const config = require('./src/config')
const routes = require('./src/routes')
const ApiError = require('./src/utils/ApiError')
const httpStatus = require('http-status')
const {errorConverter, errorHandler} = require('./src/middlewares/error');

database()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    req.logger = logger
    next()
})
app.use('/api/v1/', routes)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

process.on('uncaughtException', (err) => {
    console.log(err)
})
process.on('rejectionHandled', (err) => {
    console.log(err)
})

app.listen(config.port, () => {
    const msg = 'server is running on port: ' + config.port
    logger.info(msg)
})

/*
const eventbus = new EventEmitter()

eventbus.on('new-order', function (orderId) {
    console.log('New Order is raised. order id: ' + orderId)
})

eventbus.emit('new-order', 1234)
*/
