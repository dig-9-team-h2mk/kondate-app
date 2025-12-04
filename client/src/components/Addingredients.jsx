// import React, { useState } from "react";
import { auth } from "../firebase";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

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
    const idToken = await auth.currentUser?.getIdToken();
    await fetch("/api/stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        food_name: ingredient,
        quantity: quantity,
        user_id: loginUserId,
      }),
    });
    setIngredient("");
    setQuantity("");
    fetch(`/api/stock/${loginUserId}`, {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  return (
    <div className="tables" style={{ display: "flex" }}>
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

      <Button onClick={handleAddClick} variant="outline">
        <Plus />
      </Button>
    </div>
  );
}

export default Addingredients;
