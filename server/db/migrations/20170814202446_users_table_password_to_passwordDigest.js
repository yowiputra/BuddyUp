
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function (table) {
      table.renameColumn('password', 'password_digest')
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([

    knex.schema.table('users', function (table) {
      table.renameColumn('password_digest', 'password')
    })
  ])
};
