
exports.up = function(knex, Promise) {
  return Promise.all([
        knex.schema.createTable('rooms', function(table) {
            table.increments();
            table.string('name').unique().notNull();
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('rooms')
    ])
};
