
exports.up = function(knex) {
    return knex.schema.createTable('ducks', table => {
        table.increments()
        table.string('duck_names', 128)

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ducks')
};
