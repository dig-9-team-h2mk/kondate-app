import { useState } from "react";
import { useEffect } from "react";

function IngredientsList({ loginUserId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/api/stock/${loginUserId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

  const handleDeleteClick = async (id) => {
    await fetch(`/api/stock/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: loginUserId,
      }),
    });
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
