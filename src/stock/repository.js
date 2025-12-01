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

  return { insert, getByFoodAndUser };
}

module.exports = { createStockRepository };
