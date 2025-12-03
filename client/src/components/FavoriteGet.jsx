import React from "react";
import { useEffect } from "react";
const FavoriteGet = ({ favoriteFoodList, setFavoriteFoodList, user }) => {
  const listFetch = async () => {
    const res = await fetch(`/api/favorites/${user.uid}`);
    const data = await res.json();
    setFavoriteFoodList(data);
  };

  const handleDeleteClick = async (id) => {
    await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.uid,
      }),
    });
  };

  useEffect(() => {
    listFetch();
  }, [favoriteFoodList]); //eslint-disable-line

  return (
    <div>
      <div className="material-Name-List">
        <h2>登録済みの好きな食材</h2>
        <ul className="favorite-list">
          {favoriteFoodList.map((food, index) => (
            <div key={index} className="favorite-box">
              <p>{food.favorite_food}</p>
              <button
                className="del-button"
                onClick={() => handleDeleteClick(food.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FavoriteGet;
