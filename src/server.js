const App = require('./app/app')



App.then((server) => {
    server.start(() => {
        console.log('Server is Running port 4000')
    })
}).catch((err) => console.log(err))