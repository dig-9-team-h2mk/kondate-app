import { useState } from "react";
import { useEffect } from "react";

function IngredientsList({ loginUserId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/api/stock/${loginUserId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

  return (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {items.map((item, index) => (
        <li key={index}>
          {item.food_name}
          {item.quantity}g
        </li>
      ))}
    </ul>
  );
}

export default IngredientsList;
