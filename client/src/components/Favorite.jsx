import React from "react";
import FavoritePost from "./FavoritePost";
import FavoriteGet from "./FavoriteGet";
import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <Button className="modalLoginButton" variant="outline" onClick={goToTop}>
        <House />
      </Button>
    </div>
  );
}

export default Favorite;
