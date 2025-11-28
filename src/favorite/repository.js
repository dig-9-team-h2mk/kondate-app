function createFavoriteRepository(knex, table = 'favorite_food') {
  const insert = async (userId, favoriteFood) => {
    await knex(table).insert({
      user_id: userId,
      favorite_food: favoriteFood,
    });
  };
  return { insert };
}

module.exports = { createFavoriteRepository };
