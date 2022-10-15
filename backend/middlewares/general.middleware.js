const generalMiddleware = async (req, res, next) => {
  if (
    req.user.userType === 1 ||
    req.user.userType === 2 ||
    req.user.userType === 3
  ) {
    next();
  } else {
    return res
      .status(401)
      .json({ message: "Unauthorized: Issue in User Type" });
  }
};

module.exports = generalMiddleware;
