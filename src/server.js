const express = require("express");
const knex = require("../knex");
const app = express();
const { createStockController } = require("./stock/controller");
const { createStockRepository } = require("./stock/repository");
const { createStockService } = require("./stock/service");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname, +"/public"));

function initStockFood(knex) {
  const repository = createStockRepository(knex);
  const service = createStockService(repository);
  const controller = createStockController(service);
  return controller;
}

const stockController = initStockFood(knex);

app.post("/api/stock", stockController.post);

app.listen(PORT, () => {
  console.log(`サーバー立ち上がりました ${PORT}`);
});
