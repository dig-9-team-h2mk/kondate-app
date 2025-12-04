import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const searchRecipe = async () => {
    setIsLoading(true);
    setIsSearch(false);
    setKeyword("");
    try {
      const res = await fetch(`/api/recipe/search?keyword=${keyword}`);
      const resJson = await res.json();
      setRecipes(resJson.recipes);
      setIsSearch(true);
      setIsLoading(false);
    } catch (error) {
      console.error("献立検索失敗", error.message);
      setIsSearch(true);
      setIsLoading(false);
      throw error;
    }
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
              placeholder="材料・料理名でレシピ検索"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            ></input>
            <Button onClick={searchRecipe} variant="outline">
              Search
            </Button>
          </div>
          {recipes.length > 0 &&
            isSearch &&
            recipes.map((recipe, index) => {
              return (
                <div className="recipe-card" key={index}>
                  <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {recipe.title}
                  </a>
                </div>
              );
            })}
          {recipes.length === 0 && isSearch && (
            <p>献立の検索結果はありません</p>
          )}
        </>
      )}
    </>
  );
}

export default Search;
