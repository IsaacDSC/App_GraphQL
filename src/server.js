const { App, log } = require('./app/app')



App.start(() => {
    log.info('Server is Running port 4000')
})