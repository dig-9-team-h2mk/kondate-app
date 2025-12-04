import React from "react";
import { useEffect } from "react";
import { auth } from "../firebase";

const FavoriteGet = ({ favoriteFoodList, setFavoriteFoodList, user }) => {
  const listFetch = async () => {
    const idToken = await auth.currentUser?.getIdToken();

    const res = await fetch(`/api/favorites/${user.uid}`, {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    });
    const data = await res.json();
    setFavoriteFoodList(data);
  };

  const handleDeleteClick = async (id) => {
    const idToken = await auth.currentUser?.getIdToken();
    await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        user_id: user.uid,
      }),
    });
    listFetch();
  };

  useEffect(() => {
    if (user) listFetch();
  }, [user]); //eslint-disable-line

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
