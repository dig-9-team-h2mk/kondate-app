const { del } = require("../../knex");

function createFavoriteRepository(knex, table = "favorite_food") {
  const insert = async (userId, favoriteFood) => {
    await knex(table).insert({
      user_id: userId,
      favorite_food: favoriteFood,
    });
  };

  const getByFavoriteFood = async (userId, favoriteFood) => {
    const favoriteFoodData = await knex(table)
      .where({
        user_id: userId,
        favorite_food: favoriteFood,
      })
      .select("*");
    return favoriteFoodData;
  };

  const update = async (userId, favoriteFoodId, updateFavoriteFood) => {
    const updatedFavoriteFood = await knex(table)
      .where({
        user_id: userId,
        id: favoriteFoodId,
      })
      .update({ favorite_food: updateFavoriteFood })
      .returning("*");

    return updatedFavoriteFood;
  };
  const getByUserId = async (userId) => {
    const favoriteFoodList = await knex(table)
      .where({ user_id: userId })
      .select("*");
    return favoriteFoodList;
  };

  const remove = async (favoriteFoodId) => {
    const deleteFavoriteFoodId = await knex(table)
      .where({ id: favoriteFoodId })
      .del();
    return deleteFavoriteFoodId;
  };

  return { insert, getByFavoriteFood, update, getByUserId, remove };
}

module.exports = { createFavoriteRepository };
