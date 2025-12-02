import React, { useEffect, useState } from "react";
import Search from "./Search";
import FavotiteList from "./FavoriteList";
import StockList from "./StockList";

function Top() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [stockList, setStockList] = useState([]);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setFavoriteList(data));
  // }, [favoriteList]);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setStockList(data));
  // }, [stockList]);

  return (
    <>
      <Search />
      <FavotiteList favoriteList={favoriteList} />
      <StockList stockList={stockList} />
    </>
  );
}

export default Top;
