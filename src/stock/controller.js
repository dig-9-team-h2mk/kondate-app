const auth = require("../auth/firebase-admin");
function createStockController() {
  const post = (req, res) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        res.status(401).end();
        return;
      }
      const decodedToken = auth.verifyIdToken(token.split(" ")[1]);
      req.user = decodedToken;
    } catch (error) {
      res.status(401).send(error);
      return;
    }
    const { food_name, quantity } = req.body;
    console.log(food_name, quantity);
    res.end();
  };
  return { post };
}

module.exports = { createStockController };
