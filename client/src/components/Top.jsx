import React, { useEffect, useState } from "react";
import Search from "./Search";
import FavoriteTable from "./FavoriteTable";
import StockTable from "./StockTable";
import { SmilePlus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Recommend from "./Recommend";
import { auth } from "../firebase";

function Top({ user }) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [loginUserId, setLoginUserId] = useState("");

  useEffect(() => {
    setLoginUserId(user.uid);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const idToken = await auth.currentUser?.getIdToken();
      const url = `/api/favorites/${loginUserId}`;
      fetch(url, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setFavoriteList(data));
    };
    if (loginUserId) fetchData();
  }, [loginUserId]);

  useEffect(() => {
    const fetchData = async () => {
      const idToken = await auth.currentUser?.getIdToken();
      const url = `/api/stock/${loginUserId}`;
      fetch(url, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setStockList(data));
    };
    if (loginUserId) fetchData();
  }, [loginUserId]);

  const handleDeleteClick = async (id) => {
    const idToken = await auth.currentUser?.getIdToken();
    await fetch(`/api/stock/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: loginUserId,
      }),
    });
    fetch(`/api/stock/${loginUserId}`, {
      headers: { authorization: `Bearer ${idToken}` },
    })
      .then((res) => res.json())
      .then((data) => setStockList(data));
  };

  const handleFavoriteDeleteClick = async (id) => {
    const idToken = await auth.currentUser?.getIdToken();
    await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: loginUserId,
      }),
    });
    fetch(`/api/favorites/${loginUserId}`, {
      headers: { authorization: `Bearer ${idToken}` },
    })
      .then((res) => res.json())
      .then((data) => setFavoriteList(data));
  };

  const navigate = useNavigate();
  const goToFavorites = () => {
    navigate("/favorites");
  };
  const goToStock = () => {
    navigate("/stock");
  };

  // ログアウト処理
  const handleLogout = () => {
    auth.signOut();
    // ログアウト後の処理を記述する（例：リダイレクトなど）
  };
  return (
    <>
      <Recommend favoriteList={favoriteList} stockList={stockList} />
      <Search />
      <FavoriteTable
        favoriteList={favoriteList}
        handleFavoriteDeleteClick={handleFavoriteDeleteClick}
      />
      <StockTable stockList={stockList} handleDeleteClick={handleDeleteClick} />
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
      <Button
        className="modalLoginButton"
        variant="outline"
        onClick={handleLogout}
      >
        <LogOut />
      </Button>
    </>
  );
}

export default Top;
