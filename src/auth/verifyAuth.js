const auth = require("./firebase-admin");

module.exports = async (req, res, next) => {
  try {
    const tokenRaw = req.headers.authorization;
    if (!tokenRaw) {
      return res.status(401).json({
        error: "Authorization token required",
      });
    }

    const tokenItems = tokenRaw.split(" ");
    if (tokenItems.length !== 2 || tokenItems[0] !== "Bearer")
      throw new Error("Authorization JWT format is invalid.");
    const token = tokenItems[1];

    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({
      error: "Authentication error",
    });
  }
};
