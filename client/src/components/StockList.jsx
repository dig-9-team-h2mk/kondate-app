import React from "react";

const stockList = [
  { id: 1, food_name: "りんご", quantity: 100 },
  { id: 2, food_name: "バナナ", quantity: 200 },
];

function StockList() {
  return (
    <>
      {stockList.map((el) => {
        return (
          <div className="stockList" key={el.id}>
            <p className="stockListValue">{el.food_name}</p>
            <p className="stockListValue">{el.quantity}</p>
            <button className="deleteButton">×</button>
          </div>
        );
      })}
    </>
  );
}

export default StockList;
