const jwt = require("jsonwebtoken");
const User = require("../models/users.model");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  console.log("token", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No Token" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({ email: decoded.email }).lean();
      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Error" });
    }
  }
};

module.exports = authMiddleware;
