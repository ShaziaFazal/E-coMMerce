const express = require("express");

const router = express.Router();
const ContactController = require("../controllers/Contact");

router.post("/postComment", ContactController.postFeedback);

//router.post("/signin", LoginController.LoginUser);

module.exports = router;
