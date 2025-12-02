import React from "react";

const FavoriteGet = ({ favoriteFood }) => {
  return (
    <div>
      <div className="material-Name-List">
        <h2>登録済みの好きな食材</h2>
        <ul>
          {favoriteFood.map((food, index) => (
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
