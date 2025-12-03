import React, { useEffect, useState } from "react";
import Search from "./Search";
import FavoriteTable from "./favoriteTable";
import StockTable from "./StockTable";

function Top({ user }) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [userId, setuserId] = useState("");

  useEffect(() => {
    setuserId(user.uid);
  }, [user]);

  useEffect(() => {
    const url = `/api/favorites/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFavoriteList(data));
  }, [userId, favoriteList]);

  useEffect(() => {
    const url = `/api/stock/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStockList(data));
  }, [userId, stockList]);

  return (
    <>
      <Search />
      <FavoriteTable favoriteList={favoriteList} />
      <StockTable stockList={stockList} />
    </>
  );
}

export default Top;
