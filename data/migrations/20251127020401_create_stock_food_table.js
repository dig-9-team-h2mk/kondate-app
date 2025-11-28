/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("stock_food", function (table) {
    table.increments("id").primary();
    table.string("food_name").notNullable();
    table.integer("quantity").notNullable();
    table.string("user_id").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex.(ta.)
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("stock_food");
};
