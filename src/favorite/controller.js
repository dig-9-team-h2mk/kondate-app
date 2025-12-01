function createStockController(service) {
  const post = async (req, res) => {
    const { favorite_food: favoirte_food } = req.body;
    const userId = "to-kun";

    const result = await service.checkDupulication(userId, favoirte_food);
    res.status(200).send(result);
  };
  return { post };
}
