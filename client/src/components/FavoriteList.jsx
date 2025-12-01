import React from "react";

const favoriteList = [
  { id: 1, favorite_food: "たい焼き" },
  { id: 2, favorite_food: "もんじゃ" },
];
function FavoriteList() {
  return (
    <>
      {favoriteList.map((el) => {
        return <div key={el.id}>{el.favorite_food}</div>;
      })}
    </>
  );
}

export default FavoriteList;
