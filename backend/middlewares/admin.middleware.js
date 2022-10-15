const adminMiddleware = async (req, res, next) => {
  console.log(req.user.userType === 1);
  if (req.user.userType === 1) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized: Not an Admin" });
  }
};

module.exports = adminMiddleware;
