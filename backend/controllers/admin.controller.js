const User = require("../models/users.model");

const deleteUser = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "Can't Find User" });

  await user.delete();
  res.status(200).json({ message: "User Deleted" });
};

const showme = async (req, res) => {
  const user = req.user;
  res.status(200).json({ user: user.name });
};

module.exports = {
  deleteUser,
  showme,
};
