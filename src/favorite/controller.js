const { resourceUsage } = require("process");

function createFavoriteController(service) {
  const create = async (req, res) => {
    const { favorite_food, user_id } = req.body;
    const result = await service.checkDuplication(user_id, favorite_food);
    res.status(200).send(result);
  };
  const list = async (req, res) => {
    const userId = req.params.loginUserId;
    const result = await service.list(userId);
    res.status(200).send(result);
  };
  const remove = async (req, res) => {
    const favoriteFoodId = req.params.id;

    const result = await service.remove(favoriteFoodId);
    res.status(200).send(result);
  };
  return { create, list, remove };
}
module.exports = { createFavoriteController };
