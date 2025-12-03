function insertFavoriteService(repository) {
  const create = async (userId, favorite_food) => {
    return await repository.insert(userId, favorite_food);
  };
  const checkDuplication = async (userId, favorite_food) => {
    const result = await repository.getByFavoriteFood(userId, favorite_food);
    if (result.length === 0) {
      await create(userId, favorite_food);
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
  const list = async (userId) => {
    const result = await repository.getByUserId(userId);
    return result;
  };

  const remove = async (FavoritefoodId) => {
    await repository.remove(FavoritefoodId);
    return { message: "削除しました" };
  };

  return { create, checkDuplication, list, remove };
}

module.exports = { insertFavoriteService };
