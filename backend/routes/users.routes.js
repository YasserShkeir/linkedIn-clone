const { Router } = require("express");
const { deleteUser } = require("../controllers/admin.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/deleteUser", authMiddleware, deleteUser);

module.exports = router;
