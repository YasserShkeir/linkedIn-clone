const { Router } = require("express");

// Controllers
const { editProfile } = require("../controllers/general.controller");
const { deleteUser, showme } = require("../controllers/admin.controller");
const {
  createJob,
  getApplicants,
  getJobs,
} = require("../controllers/employer.controller");
const {
  followEmployer,
  searchJobs,
  jobApply,
  getEmpJobs,
} = require("../controllers/employee.controller");

// Middlewares
const authMiddleware = require("../middlewares/auth.middleware");
const generalMiddleware = require("../middlewares/general.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const employerMiddleware = require("../middlewares/employer.middleware");
const employeeMiddleware = require("../middlewares/employee.middleware");

const router = Router();

// General Functions
router.post("/editProfile", authMiddleware, generalMiddleware, editProfile);

// Admin Functions
router.post("/deleteUser", authMiddleware, adminMiddleware, deleteUser);
router.post("/showme", authMiddleware, adminMiddleware, showme);

// Employer Functions
router.post("/createJob", authMiddleware, employerMiddleware, createJob);
router.get(
  "/getApplicants/:id",
  authMiddleware,
  employerMiddleware,
  getApplicants
);
router.get("/getJobs", authMiddleware, employerMiddleware, getJobs);

// Employee Functions
router.post(
  "/followEmployer",
  authMiddleware,
  employeeMiddleware,
  followEmployer
);
router.post("/searchJobs", authMiddleware, employeeMiddleware, searchJobs);
router.post("/jobApply", authMiddleware, employeeMiddleware, jobApply);
router.get("/getEmpJobs", authMiddleware, employeeMiddleware, getEmpJobs);

module.exports = router;
