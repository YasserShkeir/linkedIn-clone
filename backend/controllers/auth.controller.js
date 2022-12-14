const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(404).json({ message: "Invalid Email" });

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(404).json({ message: "Invalid Password" });

  const token = jwt.sign(
    { email: user.email, name: user.name, userType: user.userType },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
  res.status(200).json({ token: token, userType: user.userType });
};

const signup = async (req, res) => {
  const { name, email, phone, password, userType } = req.body;
  try {
    const user = new User();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = await bcrypt.hash(password, 10);
    user.userType = userType;

    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  login,
  signup,
};
