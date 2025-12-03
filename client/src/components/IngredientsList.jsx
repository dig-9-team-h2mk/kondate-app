import { useEffect } from 'react';
import { auth } from '../firebase';
import StockTable from './StockTable';

function IngredientsList({ loginUserId, setItems, items }) {
  useEffect(() => {
    fetch(`/api/stock/${loginUserId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [loginUserId, setItems]);

  const handleDeleteClick = async (id) => {
    const idToken = await auth.currentUser?.getIdToken();
    await fetch(`/api/stock/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: loginUserId,
      }),
    });
    fetch(`/api/stock/${loginUserId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  return <StockTable stockList={items} handleDeleteClick={handleDeleteClick} />;
}

export default IngredientsList;
