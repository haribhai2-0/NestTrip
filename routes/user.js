const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers=require("../controllers/user.js")

// Signup Form
router.get("/signup", userControllers.renderSignupform);

// Signup Logic
router.post("/signup",
   wrapAsync(userControllers.signup));

// Login Form
router.get("/login", userControllers.renderLoginform);

// Login Logic
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userControllers.login
);
// logout
router.get("/logout",userControllers.logout)

module.exports = router;