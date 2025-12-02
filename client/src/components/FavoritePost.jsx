import React from "react";

function FavoritePost({ favoriteFood, setFavoriteFood }) {
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
        <button className="material-Name-Button">登録</button>
      </div>
    </div>
  );
}

export default FavoritePost;
