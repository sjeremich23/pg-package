exports.up = function(knex) {
  return knex.schema.createTable("hubs-users", tbl => {
    tbl.increments();

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
  return knex.schema.dropTableIfExists("hubs-users");
};
