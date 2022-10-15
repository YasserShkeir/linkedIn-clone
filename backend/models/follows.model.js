const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
  followerID: {
    type: String,
    required: "Follower ID is required",
  },
  employerID: {
    type: String,
    required: "Employer ID is required",
  },
});

const Follow = mongoose.model("Follow", followSchema);

module.exports = Follow;
