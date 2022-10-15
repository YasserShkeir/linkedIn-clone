const User = require("../models/users.model");
const Job = require("../models/jobs.model");
const Follow = require("../models/follows.model");

const followEmployer = async (req, res) => {
  const employerID = req.body;
};

module.exports = {
  followEmployer,
};
