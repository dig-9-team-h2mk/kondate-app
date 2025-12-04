import { useState } from "react";
import { Button } from "./ui/button";

function Recommend({ favoriteList, stockList }) {
  // const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const recommendRecipe = async () => {
    setIsLoading(true);
    setIsSearch(false);
    console.log(favoriteList);
    const keyword = `${favoriteList
      .map((food) => food.favorite_food)
      .join(" ")} ${stockList.map((stock) => stock.food_name).join(" ")}`;
    console.log("keyword", keyword);

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
      <h1>今日の献立</h1>
      <Button onClick={recommendRecipe}>提案</Button>
      {isLoading ? (
        <h2>献立検索中...</h2>
      ) : (
        <>
          {recipes.length > 0 &&
            isSearch &&
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
          {recipes.length === 0 && isSearch && (
            <p>提案できる献立はありません</p>
          )}
        </>
      )}
    </>
  );
}

export default Recommend;
