const mongoose = require("mongoose");
const User = require("../models/users.model");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  employer: {
    type: User,
    required: "Employer is required",
  },
  location: {
    type: String,
    required: "Location is required",
  },
  remote: {
    type: Boolean,
    required: "Remote is required",
  },
  easyApply: {
    type: Boolean,
    required: "Easy Apply is required",
  },
  text: {
    type: String,
    required: "Text is required",
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
