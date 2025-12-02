function createStockController(service) {
  const post = async (req, res) => {
    const { food_name: foodName, quantity } = req.body;
    const userId = "sampleUser";

    const result = await service.checkDuplication(userId, foodName, quantity);
    res.status(200).send(result);
  };

  const get = async (req, res) => {
    const userId = "sampleUser";
    const result = await service.getStockFood(userId);
    res.status(200).send(result);
  };
  return { post, get };
}

module.exports = { createStockController };
