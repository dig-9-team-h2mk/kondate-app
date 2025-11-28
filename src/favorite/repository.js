const { use } = require('react');

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

  const update = async (userId, favoriteFoodId, updateFavoriteFood) => {
    const updatedFavoriteFood = await knex(table)
      .where({
        user_id: userId,
        id: favoriteFoodId,
      })
      .update({ favorite_food: updateFavoriteFood })
      .returning('*');

    return updatedFavoriteFood;
  };

  const remove = async (userId, favoriteFood) => {
    await knex(table)
      .where({
        user_id: userId,
        favorite_food: favoriteFood,
      })
      .del();
  };
  return { insert, select, update, remove };
}

module.exports = { createFavoriteRepository };
