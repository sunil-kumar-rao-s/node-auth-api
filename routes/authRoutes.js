const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/getprofile", authMiddleware, authController.getProfile);

module.exports = router;
