import React, { useState } from "react";
import Addingredients from "./Addingredients";
import IngredientsList from "./IngredientsList";
import { useEffect } from "react";

function Stock({ user }) {
  const [loginUserId, setLoginUserId] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    setLoginUserId(user.uid);
  }, [user]);

  return (
    <div>
      <h1>冷蔵庫の中身を管理</h1>
      <p>冷蔵庫にある食材とグラム(g)を入力してください</p>

      <Addingredients
        loginUserId={loginUserId}
        ingredient={ingredient}
        setIngredient={setIngredient}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <h2>登録済みの食材</h2>

      <IngredientsList
        loginUserId={loginUserId}
        ingredient={ingredient}
        setIngredient={setIngredient}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default Stock;
