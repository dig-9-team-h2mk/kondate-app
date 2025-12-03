function createRecipeController(service) {
  const search = async (req, res) => {
    const keyword = req.query.keyword;
    const result = await service.search(keyword);
    res.status(200).send(result);
  };
  return { search };
}

module.exports = { createRecipeController };
