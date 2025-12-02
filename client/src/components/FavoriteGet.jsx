import React from "react";
import { useEffect } from "react";
const FavoriteGet = ({ favoriteFoodList, setFavoriteFoodList }) => {
  //   const Listfetch = async () => {
  //     const res = await fetch("/api/favorites");
  //     const data = await res.json();
  //     console.log(data);
  //     setFavoriteFoodList(data);
  //   };

  //   useEffect(() => {
  //     Listfetch();
  //   }, []);

  return (
    <div>
      <div className="material-Name-List">
        <h2>登録済みの好きな食材</h2>
        <ul>
          {favoriteFoodList.map((food, index) => (
            <div key={index}>
              {food}
              <button>🗑️</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FavoriteGet;
