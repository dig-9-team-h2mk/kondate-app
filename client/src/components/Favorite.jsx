import React, { useEffect, useState } from "react";
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
  const [flag, setFlag] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {}, [favoriteFoodList]);

  const goToTop = () => {
    navigate("/");
  };
  return (
    <div>
      <FavoritePost
        favoriteFood={favoriteFood}
        setFavoriteFood={setFavoriteFood}
        user={user}
        setFlag={setFlag}
      />
      <FavoriteGet
        favoriteFoodList={favoriteFoodList}
        setFavoriteFoodList={setFavoriteFoodList}
        user={user}
        flag={flag}
      />

      <Button className="modalLoginButton" variant="outline" onClick={goToTop}>
        <House />
      </Button>
    </div>
  );
}

export default Favorite;
