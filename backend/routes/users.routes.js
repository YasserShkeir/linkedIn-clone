const { Router } = require("express");
const { deleteUser } = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");
const employeeMiddleware = require("../middlewares/employee.middleware");
const employerMiddleware = require("../middlewares/employer.middleware");

const router = Router();

router.post("/deleteUser", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
