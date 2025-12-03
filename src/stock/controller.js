function createStockController(service) {
  const create = async (req, res) => {
    const { food_name: foodName, quantity, user_id: userId } = req.body;

    const result = await service.checkDuplication(userId, foodName, quantity);
    res.status(200).send(result);
  };

  const list = async (req, res) => {
    const userId = req.params.loginUserId;
    const result = await service.getStockFood(userId);
    res.status(200).send(result);
  };

  const remove = async (req, res) => {
    const foodId = req.params.id;
    console.log(foodId);

    const result = await service.remove(foodId);
    res.status(200).send(result);
  };
  return { create, list, remove };
}

module.exports = { createStockController };
