const employerMiddleware = async (req, res, next) => {
  if (req.user.userType === 2) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized: Not an Employer" });
  }
};

module.exports = employerMiddleware;
