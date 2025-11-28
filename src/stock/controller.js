function createStockController(service) {
  const post = async (req, res) => {
    const { food_name, quantity } = req.body;
    const userId = "sampleUser";

    await service.create(userId, food_name, quantity);
    res.status(204).end();
  };
  return { post };
}

module.exports = { createStockController };
