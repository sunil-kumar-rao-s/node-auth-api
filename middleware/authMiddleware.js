const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    res.status(400).json({ message: "token not found" });

  try {
    const token = authHeader.split(" ")[1];
    const extracted = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(extracted.id).select("-password");
    if (!req.user) res.status(400).json({ message: "user not found" });
    next();
  } catch (err) {
    res.status(500).json({ message: "internal server error", err });
  }
};

module.exports = authMiddleware;
