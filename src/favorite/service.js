function insertFavoriteService(service) {
  const insert = async (userId, favorite_food) => {
    return await Repositori.insert(userId, favorite_food);
  };
  const checkDuplication = async (userId, favorite_food) => {
    const result = await Repositori.getByFavoriteFood(useId, favoirte_food);
    if (result.length === 0) {
      await insert(userId, favorite_food);
      return {
        message: "登録完了",
      };
    } else {
      return {
        message: "すでに登録済みです",
        value: result,
      };
    }
  };
  return { insert, checkDuplication };
}

module.exports = {
  insertFavoriteService,
};
