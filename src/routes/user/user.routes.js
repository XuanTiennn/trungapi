const express = require("express");
const userController = require("../../controller/user/user.controller");
const router = express.Router();

router.route("/login/register").post(userController.registerUser);
router.route("/login").post(userController.loginUser);

module.exports = router;
