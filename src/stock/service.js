function createStockService(repository) {
  const create = async (useId, stockFood, quantity) => {
    return await repository.insert(useId, stockFood, quantity);
  };
  return { create };
}

module.exports = { createStockService };
