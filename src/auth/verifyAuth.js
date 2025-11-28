import { auth } from "../config/firebase-admin";

export const verifyAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        error: "Authorization token required",
      });
    }

    const decodedToken = await auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({
      error: "Authentication error",
    });
  }
};
