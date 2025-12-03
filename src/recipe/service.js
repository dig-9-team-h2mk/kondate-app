function createRecipeService(repository) {
  const search = async (keyword) => {
    return await repository.search(keyword);
  };

  return { search };
}

module.exports = { createRecipeService };
