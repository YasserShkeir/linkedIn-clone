const User = require("../models/users.model");
const Job = require("../models/jobs.model");

const createJob = async (req, res) => {
  const { title, location, remote, easyApply, text } = req.body;

  try {
    const job = new Job();
    const employer = req.user;

    job.title = title;
    job.employer = employer.name;
    job.location = location;
    job.remote = remote;
    job.easyApply = easyApply;
    job.text = text;

    await job.save();
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  createJob,
};
