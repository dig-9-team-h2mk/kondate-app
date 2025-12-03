import React, { useEffect, useState } from "react";
import Search from "./Search";
import FavoriteTable from "./FavoriteTable";
import StockTable from "./StockTable";
import { SmilePlus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Top({ user }) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [userId, setuserId] = useState('');

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

  const navigate = useNavigate();
  const goToFavorites = () => {
    navigate("/favorites");
  };
  const goToStock = () => {
    navigate("/stock");
  };

  return (
    <>
      <Search />
      <FavoriteTable favoriteList={favoriteList} />
      <StockTable stockList={stockList} />
      <Button
        className="modalFavoriteButton"
        variant="outline"
        onClick={goToFavorites}
      >
        <SmilePlus />
      </Button>
      <Button
        className="modalStockButton"
        variant="outline"
        onClick={goToStock}
      >
        <CirclePlus />
      </Button>
      <Button className="modalLoginButton" variant="outline">
        <LogOut />
      </Button>
    </>
  );
}

export default Top;
