const logger = require('pino')({
    level: 'debug',
    prettyPrint: {
        levelFirst: true,
        colorize: true
    }
})


module.exports = { logger }