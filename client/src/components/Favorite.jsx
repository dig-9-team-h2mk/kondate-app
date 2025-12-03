import React from "react";
import FavoritePost from "./FavoritePost";
import FavoriteGet from "./FavoriteGet";
import { useNavigate } from "react-router-dom";

function Favorite({
  favoriteFood,
  setFavoriteFood,
  user,
  favoriteFoodList,
  setFavoriteFoodList,
}) {
  const navigate = useNavigate();

  const goToTop = () => {
    navigate("/top");
  };
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

      <button onClick={goToTop}>トップ画面</button>
      {/* <Button
        className="modalFavoriteButton"
        variant="outline"
        onClick={goToTop}
      >
        <SmilePlus />
      </Button> */}
    </div>
  );
}

export default Favorite;
