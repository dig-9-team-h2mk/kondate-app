import React, { useState } from "react";
import Addingredients from "./Addingredients";
import IngredientsList from "./IngredientsList";
import { useEffect } from "react";

function Stock({ user }) {
  const [loginUserId, setLoginUserId] = useState("");

  useEffect(() => {
    setLoginUserId(user.uid);
  }, [user]);

  return (
    <div>
      <h1>冷蔵庫の中身を管理</h1>
      <p>冷蔵庫にある食材とグラム(g)を入力してください</p>

      <Addingredients loginUserId={loginUserId} />

      <h2>登録済みの食材</h2>

      <IngredientsList loginUserId={loginUserId} />
    </div>
  );
}

export default Stock;
