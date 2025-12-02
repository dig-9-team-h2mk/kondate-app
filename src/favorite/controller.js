function createFavoriteController(service) {
  const post = async (req, res) => {
    const { favorite_food, user_id } = req.body;
    // const userId = "kimu";
    const result = await service.checkDuplication(user_id, favorite_food);
    res.status(200).send(result);
  };
  return { post };
}
module.exports = { createFavoriteController };
