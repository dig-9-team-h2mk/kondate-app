function createStockService(repository) {
  const create = async (userId, stockFood, quantity) => {
    return await repository.insert(userId, stockFood, quantity);
  };
  const checkDuplication = async (userId, stockFood, quantity) => {
    const result = await repository.getByFoodAndUser(userId, stockFood);
    if (result.length === 0) {
      create(userId, stockFood, quantity);
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
