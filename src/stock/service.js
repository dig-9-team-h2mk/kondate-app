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
  return { create, checkDuplication };
}

module.exports = { createStockService };
