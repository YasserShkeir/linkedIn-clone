const employeeMiddleware = async (req, res, next) => {
  if (req.user.userType === 3) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized: Not an Employee" });
  }
};

module.exports = employeeMiddleware;
