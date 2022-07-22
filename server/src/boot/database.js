const mongoose = require('mongoose')
const config = require('../config')
const logger = require('./logger')

module.exports = () => {
    const {user, password, host, port, name} = config.database

    const databaseUrl = `mongodb://${user ? `${user}:${password}@` : ''}${host}:${port}/${name}`
    mongoose.connect(databaseUrl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (error) => {
            if (error) {
                logger.error('App starting error:' + error.stack);
                process.exit(1)
            }
            logger.info('database connected.')
        }
    );

}
