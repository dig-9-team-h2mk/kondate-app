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
  return { create, checkDuplication };
}

module.exports = { insertFavoriteService };
