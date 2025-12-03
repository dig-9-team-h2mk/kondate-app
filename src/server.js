const express = require("express");
const knex = require("../knex");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// const verifyAuth = require('./auth/verifyAuth');

const app = express();
const { createStockController } = require("./stock/controller");
const { createStockRepository } = require("./stock/repository");
const { createStockService } = require("./stock/service");
const { insertFavoriteService } = require("./favorite/service");
const { createFavoriteRepository } = require("./favorite/repository");
const { createFavoriteController } = require("./favorite/controller");
const PORT = process.env.PORT || 3000;

app.use(express.json());
console.log(path.join(__dirname, "../public"));

app.use(express.static(path.join(__dirname, "../public")));

// 認証が必要なAPIの書き方と、ユーザー情報の取得方法
// app.get("/api/sample", verifyAuth, (req, res) => {
//   console.log(req.user);
//   res.status(204).end();
// });

function initStockFood(knex) {
  const repository = createStockRepository(knex);
  const service = createStockService(repository);
  const controller = createStockController(service);
  return controller;
}

function initFavoriteFood(knex) {
  const favoriteRepository = createFavoriteRepository(knex);
  const favoriteService = insertFavoriteService(favoriteRepository);
  const favoriteController = createFavoriteController(favoriteService);
  return favoriteController;
}

const stockController = initStockFood(knex);
const favoriteController = initFavoriteFood(knex);

app.post("/api/stock", stockController.create);

app.post("/api/favorites", favoriteController.create);

app.get("/api/favorites/:loginUserId", favoriteController.list);

app.get("/api/stock/:loginUserId", stockController.list);

app.delete("/api/stock/:id", stockController.remove);

app.listen(PORT, () => {
  console.log(`サーバー立ち上がりました ${PORT}`);
});
