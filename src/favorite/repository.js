function createFavoriteRepository(knex, table = 'favorite_food') {
  const insert = async (userId, favoriteFood) => {
    await knex(table).insert({
      user_id: userId,
      favorite_food: favoriteFood,
    });
  };

  const select = async (userId, favoriteFood) => {
    const favoriteFoodData = await knex(table)
      .where({
        user_id: userId,
        favorite_food: favoriteFood,
      })
      .select('*');
    return favoriteFoodData;
  };
  return { insert, select };
}

module.exports = { createFavoriteRepository };
