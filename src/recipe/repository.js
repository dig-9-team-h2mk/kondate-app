const { JSDOM } = require('jsdom');

function createRecipeRepository() {
  const search = async (keyword) => {
    const url = `https://recipe.rakuten.co.jp/search/${keyword}/`;
    const result = await fetch(url);
    const html = await result.text();
    const dom = new JSDOM(html);
    const titles = [
      ...dom.window.document.getElementsByClassName(
        'recipe_ranking__recipe_title omit_2line'
      ),
    ]
      .map((element) => element.innerHTML)
      .slice(0, 3);
    const recipeUrls = [
      ...dom.window.document.getElementsByClassName('recipe_ranking__link'),
    ]
      .map((recipe) => `https://recipe.rakuten.co.jp/${recipe.href}`)
      .slice(0, 3);

    const recipes = [];
    for (let i = 0; i < titles.length; i++) {
      recipes.push({
        title: titles[i],
        url: recipeUrls[i],
      });
    }
    console.log('recipes', recipes);

    return { recipes };
  };

  return { search };
}

module.exports = { createRecipeRepository };
