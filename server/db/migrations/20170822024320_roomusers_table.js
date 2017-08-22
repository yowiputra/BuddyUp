
exports.up = function(knex, Promise) {
  return Promise.all([
        knex.schema.createTable('roomusers', function(table) {
            table.increments();
            table.integer('room_id').notNull();
            table.integer('user_id').notNull();
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('roomusers')
    ])
};
