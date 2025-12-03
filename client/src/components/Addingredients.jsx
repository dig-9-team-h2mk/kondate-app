// import React, { useState } from "react";

function Addingredients({
  loginUserId,
  ingredient,
  setIngredient,
  quantity,
  setQuantity,
  setItems,
}) {
  // const [ingredient, setIngredient] = useState("");
  // const [quantity, setQuantity] = useState("");

  const handleAddClick = async () => {
    await fetch("/api/stock/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        food_name: ingredient,
        quantity: quantity,
        user_id: loginUserId,
      }),
    });
    setIngredient("");
    setQuantity("");
    fetch(`/api/stock/${loginUserId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <p style={{ textAlign: "left" }}>食材名</p>
        <input
          type="text"
          placeholder="例: にんじん"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
      </div>

      <div>
        <p style={{ textAlign: "left" }}>グラム(g)</p>
        <input
          type="text"
          placeholder="例: 100"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button onClick={handleAddClick}>+ 追加する</button>
    </div>
  );
}

export default Addingredients;
