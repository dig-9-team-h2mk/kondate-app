import React from "react";

const stockList = [
  { id: 1, food_name: "りんご", quantity: 100 },
  { id: 2, food_name: "バナナ", quantity: 200 },
];

function StockList() {
  return (
    <>
      <div>冷蔵庫の食べ物</div>
      {stockList.map((el) => {
        return (
          <div className="stockList" key={el.id}>
            <div className="stockListValue">{el.food_name}</div>
            <div className="stockListValue">{el.quantity}</div>
            <button className="deleteButton">×</button>
          </div>
        );
      })}
    </>
  );
}

export default StockList;
