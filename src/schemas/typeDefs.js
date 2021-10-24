const path = require('path')

const typeDefs_animals = path.resolve(__dirname, './', 'schemas.graphql')
const typeDefs_users = path.resolve(__dirname, './', 'user.schemas.gpl')
console.log('\n\n' + typeDefs_users + '\n\n')


module.exports = {
    typeDefs_animals,
    typeDefs_users
}