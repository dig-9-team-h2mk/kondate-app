function createStockRepository(knex) {
  const insert = async (userId, stockFood, quantity) => {
    await knex(table).insert({
      user_id: userId,
      stock_food: stockFood,
      quantity: quantity,
    });
  };
  return { insert };
}
