/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();
const LoginController = require("../controllers/Login");

router.post("/signup", LoginController.SignupUser);
router.post("/signin", LoginController.LoginUser);
router.get("/users", LoginController.getUsers);

module.exports = router;
