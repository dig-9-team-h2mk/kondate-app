import { useEffect } from "react";
import { auth } from "../firebase";
import StockTable from "./StockTable";

function IngredientsList({ loginUserId, setItems, items }) {
  useEffect(() => {
    const fetchData = async () => {
      const idToken = await auth.currentUser?.getIdToken();
      fetch(`/api/stock/${loginUserId}`, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setItems(data));
    };
    if (loginUserId) fetchData();
  }, [loginUserId, setItems]);

  const handleDeleteClick = async (id) => {
    const idToken = await auth.currentUser?.getIdToken();
    await fetch(`/api/stock/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: loginUserId,
      }),
    });
    fetch(`/api/stock/${loginUserId}`, {
      headers: { authorization: `Bearer ${idToken}` },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  return (
    <div className="tables">
      <StockTable
        className="stockTable"
        stockList={items}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default IngredientsList;
