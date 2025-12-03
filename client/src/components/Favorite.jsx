import React from "react";
import FavoritePost from "./FavoritePost";
import FavoriteGet from "./FavoriteGet";

function Favorite({
  favoriteFood,
  setFavoriteFood,
  user,
  favoriteFoodList,
  setFavoriteFoodList,
}) {
  return (
    <div>
      <FavoritePost
        favoriteFood={favoriteFood}
        setFavoriteFood={setFavoriteFood}
        user={user}
      />
      <FavoriteGet
        favoriteFoodList={favoriteFoodList}
        setFavoriteFoodList={setFavoriteFoodList}
        user={user}
      />
    </div>
  );
}

export default Favorite;
