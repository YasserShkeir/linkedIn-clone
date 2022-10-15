const User = require("../models/users.model");
const Job = require("../models/jobs.model");

const createJob = async (req, res) => {
  const { title, location, remote, easyApply, text, date } = req.body;

  try {
    const job = new Job();
    const employer = req.user;

    job.title = title;
    job.employer = employer.name;
    job.employerID = employer._id.toString();
    job.location = location;
    job.remote = remote;
    job.easyApply = easyApply;
    job.text = text;
    job.date = date;
    job.applicants = [];

    await job.save();
    res.status(200).json({ message: "Job Added Successfully" });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getApplicants = async (req, res) => {
  const id = req.params.id;
  const employer = req.user;
  const job = await Job.findById(id);
  if (!job) return res.status(404).json({ message: "Can't Find Job" });

  if (job.employerID != employer._id) {
    return res.status(404).json({ message: "Can't Access Applicants" });
  }

  res.status(200).json({ Applicants: job.applicants, Employer: employer.name });
};

module.exports = {
  createJob,
  getApplicants,
};
