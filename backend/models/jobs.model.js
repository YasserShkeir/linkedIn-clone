const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  employer: {
    type: String,
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
