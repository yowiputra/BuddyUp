exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
            table.increments();
            table.string('username').unique().notNull();
            table.string('email').unique().notNull();
            table.string('password').notNull();
            table.string('tagline');
            table.string('blurb', 1000);
            table.string('imageurl');
            table.smallint('skill').defaultTo(0);
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};