import "./App.css";
import React, { useState, useEffect } from "react";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
// import { Button } from "react-bootstrap";
import { Button } from "@/components/ui/button";
// import "bootstrap/dist/css/bootstrap.min.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Top from "./components/Top";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stock from "./components/Stock";
import Favorite from "./components/Favorite";

function App() {
  // ログインしているユーザーの情報を管理するステート
  const [user, setUser] = useState(null);
  // モーダルの表示状態を管理するステート
  const [modals, setModals] = useState({ login: false, signUp: false });

  // ログインモーダルを表示する処理
  const handleLoginClick = () => {
    setModals({ login: true, signUp: false });
  };
  // ユーザ登録モーダルを表示する処理
  const handleSignUpClick = () => {
    setModals({ login: false, signUp: true });
  };
  // モーダルを閉じる処理
  const handleCloseModals = () => {
    setModals({ login: false, signUp: false });
  };

  // Firebaseの認証状態が変化した際の処理
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  //きむステート//一時的にコメントアウトしてます。
  const [favoriteFood, setFavoriteFood] = useState("");
  const [favoriteFoodList, setFavoriteFoodList] = useState([]);

  return (
    <div className="App">
      <div className="container ">
        <div className="mt-5">
          {user ? (
            // ログインしている場合の表示
            <>
              <div>
                <Router>
                  <Routes>
                    <Route path="/" element={<Top user={user} />} />
                    <Route path="/stock" element={<Stock user={user} />} />
                    <Route
                      path="/favorites"
                      element={
                        <Favorite
                          favoriteFood={favoriteFood}
                          setFavoriteFood={setFavoriteFood}
                          user={user}
                          favoriteFoodList={favoriteFoodList}
                          setFavoriteFoodList={setFavoriteFoodList}
                        />
                      }
                    />
                  </Routes>
                </Router>

                <p>{user.email} でログイン中</p>
              </div>
            </>
          ) : (
            // ログインしていない場合の表示
            <>
              <Button variant="primary" onClick={handleLoginClick}>
                ログイン
              </Button>
              <Button variant="secondary" onClick={handleSignUpClick}>
                ユーザー登録
              </Button>
            </>
          )}
        </div>
        {/* ログイン用モーダル */}
        <LoginModal
          show={modals.login}
          handleClose={handleCloseModals}
          showSignUpModal={handleSignUpClick}
        />
        <SignUpModal
          show={modals.signUp}
          handleClose={handleCloseModals}
          showLoginModal={handleLoginClick}
        />
      </div>
    </div>
  );
}

export default App;
