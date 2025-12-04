import { useEffect } from "react";
import FavoriteTable from "./FavoriteTable";
import { auth } from "../firebase";

const FavoriteGet = ({ favoriteFoodList, setFavoriteFoodList, user, flag }) => {
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

  const handleFavoriteDeleteClick = async (id) => {
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
  }, [user, flag]); //eslint-disable-line

  return (
    <FavoriteTable
      favoriteList={favoriteFoodList}
      handleFavoriteDeleteClick={handleFavoriteDeleteClick}
    />
  );
};
export default FavoriteGet;
