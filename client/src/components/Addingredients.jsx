import React, { useState } from "react";

function Addingredients({ onAdd }) {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddClick = () => {
    if (!ingredient || !quantity) return;
    onAdd(ingredient, quantity);
    setIngredient("");
    setQuantity("");
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
