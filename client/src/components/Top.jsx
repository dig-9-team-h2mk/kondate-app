import React, { useEffect, useState } from "react";
import Search from "./Search";
import FavoriteTable from "./FavoriteTable";
import StockTable from "./StockTable";
import { SmilePlus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Top({ user }) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [userId, setuserId] = useState("");

  useEffect(() => {
    setuserId(user.uid);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const idToken = await auth.currentUser?.getIdToken();
      const url = `/api/favorites/${userId}`;
      fetch(url, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setFavoriteList(data));
    };
    if (userId) fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      const idToken = await auth.currentUser?.getIdToken();
      const url = `/api/stock/${userId}`;
      fetch(url, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setStockList(data));
    };
    if (userId) fetchData();
  }, [userId]);

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
