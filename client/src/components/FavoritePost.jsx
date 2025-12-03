import React from "react";

function FavoritePost({ favoriteFood, setFavoriteFood, user }) {
  function resetForm() {
    setFavoriteFood("");
  }

  const handleAddFavoriteFood = async () => {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite_food: favoriteFood,
        user_id: user.uid,
      }),
    });
    const data = await res.json();
    console.log("data", data);
    resetForm();
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
          placeholder="例）鶏肉、トマト、オムライス"
          onChange={(e) => setFavoriteFood(e.target.value)}
        />
        <button
          className="material-Name-Button"
          onClick={handleAddFavoriteFood}
        >
          登録
        </button>
      </div>
    </div>
  );
}

export default FavoritePost;
