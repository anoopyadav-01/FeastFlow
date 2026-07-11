import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized, Login Again",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authMiddleware;
