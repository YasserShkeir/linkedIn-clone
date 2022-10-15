const { Router } = require("express");
const { deleteUser, showme } = require("../controllers/admin.controller");
const {
  createJob,
  getApplicants,
} = require("../controllers/employer.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const employerMiddleware = require("../middlewares/employer.middleware");
const employeeMiddleware = require("../middlewares/employee.middleware");

const router = Router();

router.post("/deleteUser", authMiddleware, adminMiddleware, deleteUser);
router.post("/showme", authMiddleware, adminMiddleware, showme);

router.post("/createJob", authMiddleware, employerMiddleware, createJob);
router.get("/getApplicants", authMiddleware, employerMiddleware, getApplicants);

module.exports = router;
