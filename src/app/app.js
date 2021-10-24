const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const cors = require('cors')
const { logger } = require('../logs/pinoLoggers')
const pinoHttp = require('pino-http')({ logger })



const { resolvers } = require('../routers/resolvers')
    //const { typeDefs } = require('../schemas/typeDefs')
const typeDefs = path.resolve(__dirname, '../', 'schemas', 'schemas.graphql')




class App {
    constructor() {
        this.server = new GraphQLServer({ typeDefs, resolvers })
        this.PinoLogger()
    }
    PinoLogger() {
        this.server.use(pinoHttp)
    }
    cors() {
        this.server.use(cors())
    }


}


module.exports = { App: new App().server, log: logger }