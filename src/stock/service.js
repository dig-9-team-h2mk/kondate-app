function createStockService(repository) {
  const create = async (userId, foodName, quantity) => {
    return await repository.insert(userId, foodName, quantity);
  };
  const checkDuplication = async (userId, foodName, quantity) => {
    const result = await repository.getByFoodAndUser(userId, foodName);
    if (result.length === 0) {
      await create(userId, foodName, quantity);
      return {
        message: "登録完了",
      };
    } else {
      return {
        message: "すでに存在しています",
        value: result,
      };
    }
  };

  const getStockFood = async (userId) => {
    return await repository.getByFood(userId);
  };

  return { create, checkDuplication, getStockFood };
}

module.exports = { createStockService };
