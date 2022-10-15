require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

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

    console.log(employer.followedBy);

    // ** ** ** ** ACTIVATE ONLY WHEN DONE ** ** ** **

    // employer.followedBy.forEach(async (element) => {
    //   let user = await User.findById(element);
    //   console.log(user.name, user.phone);
    //   client.messages
    //     .create({
    //       from: `whatsapp:+14155238886`,
    //       body: `Hi ${user.name}! ${employer.name} just posted a job: ${title}`,
    //       to: `whatsapp:${user.phone}`,
    //     })
    //     .then((message) => console.log("test: ", message.sid));
    // });

    // await job.save();
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
