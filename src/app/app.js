const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const { resolvers } = require('../routers/resolvers')
const { typeDefs } = require('../schemas/typeDefs')

class App {
    constructor() {
        this.GraphQL()
    }
    async GraphQL() {
        const server = new GraphQLServer({ typeDefs, resolvers })
        return server
    }

}


module.exports = new App().GraphQL()