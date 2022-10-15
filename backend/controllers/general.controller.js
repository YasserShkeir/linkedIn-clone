const User = require("../models/users.model");
const bcrypt = require("bcrypt");

const editProfile = async (req, res) => {
  const { name, email, phone, password, image } = req.body;
  const currUser = await User.findById(req.user._id);

  try {
    if (name) currUser.name = name;
    if (email) currUser.email = email;
    if (phone) currUser.phone = phone;
    if (password) currUser.password = await bcrypt.hash(password, 10);
    if (image) currUser.image = image;

    let test = [
      currUser.name,
      currUser.email,
      currUser.phone,
      currUser.password,
      currUser.image,
    ];

    // currUser.save();

    res.status(200).json({ message: "Edited Profile", currUser: test });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = { editProfile };
