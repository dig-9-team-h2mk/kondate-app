import React from "react";
import { auth } from "../firebase";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

function FavoritePost({ favoriteFood, setFavoriteFood, user, setFlag }) {
  function resetForm() {
    setFavoriteFood("");
  }

  const handleAddFavoriteFood = async () => {
    const idToken = await auth.currentUser?.getIdToken();
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        favorite_food: favoriteFood,
        user_id: user.uid,
      }),
    });
    const data = await res.json();
    setFavoriteFood([...favoriteFood]);

    resetForm();
    setFlag(Date.now());
  };
  return (
    <div>
      <h1>好きな食べ物登録</h1>
      <p>好きな食べ物を登録して、献立提案の精度を上げましょう。</p>
      <div className="material-Name">
        <p>食べ物名</p>
        <input
          type="text"
          value={favoriteFood}
          placeholder="例）鶏肉、オムライス"
          onChange={(e) => setFavoriteFood(e.target.value)}
        />
        <Button
          className="material-Name-Button"
          onClick={handleAddFavoriteFood}
          variant="outline"
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}

export default FavoritePost;
