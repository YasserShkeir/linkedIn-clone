const { Router } = require("express");
const { login, signup } = require("../controllers/auth.controller");
const { deleteUser } = require("../controllers/admin.controller");
const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/deleteUser", deleteUser);

module.exports = router;
