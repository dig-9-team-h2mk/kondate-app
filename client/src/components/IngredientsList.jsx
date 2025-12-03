import { useEffect } from "react";
import { auth } from "../firebase";

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
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {items.map((item, index) => (
        <li key={index}>
          <span>
            {item.food_name}
            {item.quantity}g
          </span>
          <button onClick={() => handleDeleteClick(item.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default IngredientsList;
