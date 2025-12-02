const { resourceUsage } = require("process");

function createFavoriteController(service) {
  const create = async (req, res) => {
    const { favorite_food, user_id } = req.body;
    // const userId = "kimu";
    const result = await service.checkDuplication(user_id, favorite_food);
    res.status(200).send(result);
  };
  const list = async (req, res) => {
    // const userId = req.params.loginUserId;
    const userId = "kimu";
    const result = await service.list(userId);
    res.status(200).send(result);
  };
  return { create, list };
}
module.exports = { createFavoriteController };
