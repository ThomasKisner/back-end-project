exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", function(tbl) {
    tbl.increments();

    tbl.string("title", 100).notNullable();
    tbl.string("contents");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.deleteIfExists("notes");
};
