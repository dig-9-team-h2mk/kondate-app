import React from "react";

const favoriteList = [
  { id: 1, favorite_food: "たい焼き" },
  { id: 2, favorite_food: "もんじゃ" },
];
function FavoriteList() {
  return (
    <div className="favoriteList">
      <div>好きな食べ物</div>
      {favoriteList.map((el) => {
        return (
          <div className="favorite" key={el.id}>
            {el.favorite_food}
          </div>
        );
      })}
    </div>
  );
}

export default FavoriteList;
