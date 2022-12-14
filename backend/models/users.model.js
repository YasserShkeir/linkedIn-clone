const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: "Phone Number is required",
  },
  password: {
    type: String,
    required: "Password is required",
  },
  image: {
    type: String,
  },
  userType: {
    type: Number,
    required: "User Type is required",
  },
  follows: {
    type: Array,
  },
  followedBy: {
    type: Array,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
