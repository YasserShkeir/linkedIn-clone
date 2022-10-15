const User = require("../models/users.model");

const deleteUser = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "Can't Find User" });

  user.delete();
  res.status(200).json({ message: "User Deleted" });
};

module.exports = {
  deleteUser,
};
