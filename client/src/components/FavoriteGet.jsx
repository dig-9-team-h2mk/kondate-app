import { useEffect } from 'react';
import FavoriteTable from './FavoriteTable';

const FavoriteGet = ({ favoriteFoodList, setFavoriteFoodList, user }) => {
  const listFetch = async () => {
    const res = await fetch(`/api/favorites/${user.uid}`);
    const data = await res.json();
    setFavoriteFoodList(data);
  };

  const handleDeleteClick = async (id) => {
    await fetch(`/api/favorites/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.uid,
      }),
    });
  };

  useEffect(() => {
    listFetch();
  }, [favoriteFoodList]); //eslint-disable-line

  return (
    <FavoriteTable
      favoriteList={favoriteFoodList}
      handleDeleteClick={handleDeleteClick}
    />
  );
};
export default FavoriteGet;
