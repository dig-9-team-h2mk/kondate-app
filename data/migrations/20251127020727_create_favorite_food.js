/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favorite_food", function (table) {
    table.increments("id").primary();
    table.string("favorite_food").notNullable();
    table.string("user_id").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex.(ta.)
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("favorite_food");
};
