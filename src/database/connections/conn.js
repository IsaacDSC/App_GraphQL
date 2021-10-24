require('dotenv').config()
const { development, production } = require('../../../knexfile')
const db_server = process.env.DB_PRODUCTION == 'true' ? production : development
const knex = require('knex')(db_server)

module.exports = knex