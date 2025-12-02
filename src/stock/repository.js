function createStockRepository(knex) {
  const getByFoodAndUser = async (userId, foodName) => {
    return await knex.select("*").from("stock_food").where({
      user_id: userId,
      food_name: foodName,
    });
  };
  const insert = async (userId, foodName, quantity) => {
    return await knex("stock_food").insert({
      user_id: userId,
      food_name: foodName,
      quantity: quantity,
    });
  };

  const getByFood = async (userId) => {
    return await knex
      .select("*")
      .from("stock_food")
      .where("stock_food.user_id", userId);
  };

  return { insert, getByFoodAndUser, getByFood };
}

module.exports = { createStockRepository };
