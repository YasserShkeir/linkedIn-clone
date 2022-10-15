const User = require("../models/users.model");
const Job = require("../models/jobs.model");
const Follow = require("../models/follows.model");

const followEmployer = async (req, res) => {
  const { employerID } = req.body;
  const employer = await User.findById(employerID);
  console.log(employer.followedBy);
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
    employer.followedBy.push(followerID);

    await follow.save();
    await follower.save();
    await employer.save();

    res.status(200).json({ message: "Successfully Followed" });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const searchJobs = async (req, res) => {
  const { keyword, remote, easyApply, daysCount } = req.body;

  if (!daysCount) {
    daysCount = 10;
  }

  let pipeline = [
    {
      $search: {
        index: "jobIndex",
        text: {
          query: keyword,
          path: {
            wildcard: "*",
          },
        },
      },
    },
    {
      $match: {
        date: {
          $gte: new Date(new Date() - daysCount * 60 * 60 * 24 * 1000),
        },
      },
    },
  ];

  if (remote != null) {
    pipeline.push({
      $match: { remote: remote },
    });
  }

  if (easyApply != null) {
    pipeline.push({
      $match: { easyApply: easyApply },
    });
  }

  res.status(200).json({ message: await Job.aggregate(pipeline) });
};

module.exports = {
  followEmployer,
  searchJobs,
};
