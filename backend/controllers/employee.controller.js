const User = require("../models/users.model");
const Job = require("../models/jobs.model");
const Follow = require("../models/follows.model");

const followEmployer = async (req, res) => {
  const { employerID } = req.body;
  const follower = await User.findById(req.user._id.toString());

  try {
    const follow = new Follow();
    const followerID = follower._id.toString();

    if (follower.follows.includes(employerID)) {
      return res.status(200).json({ message: "Employer Already Followed" });
    }

    follow.followerID = followerID;
    follow.employerID = employerID;

    follower.follows.push(employerID);

    await follow.save();
    await follower.save();

    res.status(200).json({ message: "Successfully Followed" });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  followEmployer,
};
