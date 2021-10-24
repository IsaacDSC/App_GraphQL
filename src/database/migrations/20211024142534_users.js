exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name', 80).notNullable()
        table.string('username', 40).notNullable()
        table.string('email', 100).notNullable()
        table.string('password', 220).notNullable()
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};