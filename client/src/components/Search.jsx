import { useState } from 'react';

function Search() {
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = async () => {
    setIsLoading(true);
    console.log('検索');
    setKeyword('');
    const res = await fetch(`/api/recipe/search?keyword=${keyword}`);
    const resJson = await res.json();
    console.log('recipes', resJson.recipes);
    setRecipes(resJson.recipes);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h2>献立検索中...</h2>
      ) : (
        <>
          <div className="searchTools">
            <input
              className="search"
              type="text"
              placeholder="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            ></input>
            <button onClick={searchRecipe}>Search</button>
          </div>
          {recipes.length > 0 &&
            recipes.map((recipe, index) => {
              return (
                <div className="recipe-card" key={index}>
                  <p>{recipe.title}</p>
                  <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    リンク
                  </a>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}

export default Search;
