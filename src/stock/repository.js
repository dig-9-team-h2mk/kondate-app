function createStockRepository(knex) {
  const insert = async (userId, foodName, quantity) => {
    return await knex("stock_food").insert({
      user_id: userId,
      food_name: foodName,
      quantity: quantity,
    });
  };
  return { insert };
}

module.exports = { createStockRepository };
