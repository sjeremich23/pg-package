exports.up = function(knex) {
  return knex.schema.createTable("messages", tbl => {
    tbl.increments();

    tbl.string("message", 4000).notNullable();

    tbl
      .integer("hub_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("hubs")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("messages");
};
