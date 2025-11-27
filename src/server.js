const express = require("express");
const app = express();
const { createStockController } = require("./stock/controller");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname, +"/public"));

const stockController = createStockController();
app.post("/api/stock", stockController.post);

app.listen(PORT, () => {
  console.log(`サーバー立ち上がりました ${PORT}`);
});
